import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Producto } from '../products/lista-productos/productos';
import { Cliente } from '../registro/registro-cliente/clienteInterface';
import { Empleado } from '../registro/registro-empleado/empleadoInterface';
import { ProductosServices } from '../../services/productos';
import { ClienteService } from '../../services/cliente.service';
import { EmpleadoService } from '../../services/empleado';
import { VentasService } from '../../services/ventas';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from '../general/navbar/navbar';
import { Venta } from './ventaInterface';
import { VentaDetalle } from './ventaDetalleInterface';

@Component({
  selector: 'app-venta',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, Navbar],
  templateUrl: './venta.html',
  styleUrls: ['./venta.css']
})
export class VentaComponent implements OnInit {

  ventaForm!: FormGroup;
  productos: Producto[] = [];
  clientes: Cliente[] = [];
  empleados: Empleado[] = [];

  constructor(
    private fb: FormBuilder,
    private productoService: ProductosServices,
    private clienteService: ClienteService,
    private empleadoService: EmpleadoService,
    private ventasService: VentasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ventaForm = this.fb.group({
      cliente: [null, Validators.required],
      empleado: [null, Validators.required],
      producto: [null, Validators.required],
      cantidad: [
        1,
        [
          Validators.required,
          Validators.min(1),
          Validators.pattern(/^[0-9]+$/) // solo enteros
        ]
      ],
    });

    // Cargar data
    this.productoService.leerProductos().subscribe(data => this.productos = data);
    this.clienteService.leerClientes().subscribe(data => this.clientes = data);
    this.empleadoService.leerEmpleados().subscribe(data => this.empleados = data);

    // Recalcular validación dinámica de cantidad cuando cambia el producto
    this.ventaForm.get('producto')?.valueChanges.subscribe((prod: Producto) => {
      const cantidadCtrl = this.ventaForm.get('cantidad');
      if (prod) {
        cantidadCtrl?.setValidators([
          Validators.required,
          Validators.min(1),
          Validators.max(prod.cantidad),
          Validators.pattern(/^[0-9]+$/)
        ]);
      } else {
        cantidadCtrl?.setValidators([
          Validators.required,
          Validators.min(1),
          Validators.pattern(/^[0-9]+$/)
        ]);
      }
      cantidadCtrl?.updateValueAndValidity();
    });
  }

  // 🔎 Getter para producto seleccionado
  get productoSeleccionado(): Producto | null {
    return this.ventaForm.get('producto')?.value;
  }

  // 🔎 Cantidad disponible del producto
  get cantidadDisponible(): number {
    return this.productoSeleccionado ? this.productoSeleccionado.cantidad : 0;
  }

  // 🔎 Simplificación para saber si un campo es inválido
  campoInvalido(campo: string): boolean {
    const control = this.ventaForm.get(campo);
    return !!(control?.invalid && control?.touched);
  }

  guardarVenta() {
    if (this.ventaForm.invalid) {
      this.ventaForm.markAllAsTouched();
      return;
    }

    const formValue = this.ventaForm.value;

    const detalle: VentaDetalle = {
      producto: { id_producto: formValue.producto.id_producto },
      cantidad: formValue.cantidad,
      precio_unitario: formValue.producto.precio,
      subtotal: formValue.producto.precio * formValue.cantidad
    };

    const venta: Venta = {
      fecha: new Date(),
      cliente: { id_cliente: formValue.cliente.id_cliente },
      empleado: { id_empleado: formValue.empleado.id_empleado },
      detalles: [detalle],
      total: detalle.subtotal,
      iva_total: detalle.subtotal * 0.12,
      estado: 'Registrada'
    };

    this.ventasService.guardarVenta(venta).subscribe({
      next: () => {
        alert('Venta registrada correctamente');
        this.router.navigate(['/listaVentas']);
      },
      error: (err) => {
        console.error('Venta registrada correctamente', err);
        alert('Venta registrada correctamente');
      }
    });
  }
}
