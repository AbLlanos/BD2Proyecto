import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
      metodo_pago: ['efectivo', Validators.required],
      detalles: this.fb.array([]),
      total: [0],
      iva_total: [0],
      descuento_total: [0]
    });

    this.productoService.leerProductos().subscribe(data => this.productos = data);
    this.clienteService.leerClientes().subscribe(data => this.clientes = data);
    this.empleadoService.leerEmpleados().subscribe(data => this.empleados = data);
  }

  get detalles(): FormArray {
    return this.ventaForm.get('detalles') as FormArray;
  }

  agregarProducto(selProduct: HTMLSelectElement) {
    const selectedValue = selProduct.value;
    const producto = this.productos.find(p => p.id_producto === selectedValue);
    
    if (!producto) {
      alert('Producto no encontrado');
      return;
    }

    if (producto.cantidad <= 0) {
      alert('Producto sin stock disponible');
      return;
    }

    const detalle = this.fb.group({
      producto: [producto, Validators.required],
      cantidad: [1, [Validators.required, Validators.min(1), Validators.max(producto.cantidad)]],
      precio_unitario: [producto.precio, Validators.required],
      descuento: [0, [Validators.min(0)]],
      subtotal: [0],
      iva: [0]
    });

    this.detalles.push(detalle);
    this.calcularTotales();
    
    selProduct.value = '';
  }

  eliminarProducto(index: number) {
    this.detalles.removeAt(index);
    this.calcularTotales();
  }

  calcularTotales() {
    let total = 0;
    let iva_total = 0;
    let descuento_total = 0;

    this.detalles.controls.forEach((ctrl) => {
      const cantidad = ctrl.get('cantidad')?.value || 0;
      const precio = ctrl.get('precio_unitario')?.value || 0;
      const descuento = ctrl.get('descuento')?.value || 0;

      const subtotal = cantidad * precio;
      const iva = subtotal * 0.12;
      const subtotalConDescuento = subtotal - descuento;

      ctrl.patchValue({
        subtotal: subtotalConDescuento,
        iva: iva
      }, { emitEvent: false });

      total += subtotalConDescuento;
      iva_total += iva;
      descuento_total += descuento;
    });

    this.ventaForm.patchValue({
      total: parseFloat(total.toFixed(2)),
      iva_total: parseFloat(iva_total.toFixed(2)),
      descuento_total: parseFloat(descuento_total.toFixed(2))
    }, { emitEvent: false });
  }

 guardarVenta() {
    if (this.ventaForm.invalid || this.detalles.length === 0) {
      this.ventaForm.markAllAsTouched();
      alert('Debe seleccionar cliente, empleado y al menos un producto.');
      return;
    }

    const formValue = this.ventaForm.value;

    const venta: Venta = {
      fecha: new Date(),
      total: formValue.total,
      iva_total: formValue.iva_total,
      descuento_total: formValue.descuento_total,
      estado: 'pendiente',
      metodo_pago: formValue.metodo_pago,
      id_cliente: String(formValue.cliente?.id_cliente),
      id_empleado: String(formValue.empleado?.id_empleado),
      detalles: [] 
    };

    console.log('Venta a enviar (sin detalles):', JSON.stringify(venta, null, 2));


    this.ventasService.guardarVenta(venta).subscribe({
      next: (ventaGuardada) => {
        console.log('Venta guardada:', ventaGuardada);
        
        const detallesParaGuardar = formValue.detalles.map((d: any) => ({
          id_venta: ventaGuardada.id_venta,
          id_producto: d.producto.id_producto,
          nombre_producto: d.producto.nombre,
          cantidad: d.cantidad,
          precio_unitario: d.precio_unitario,
          descuento: d.descuento,
          subtotal: d.subtotal,
          iva: d.iva,
          fecha: new Date()
        }));

        console.log('Detalles a enviar:', detallesParaGuardar);

        // ✅ LLAMAR AL NUEVO MÉTODO para guardar detalles
        this.guardarDetallesIndividualmente(detallesParaGuardar, ventaGuardada.id_venta!);
      },
      error: (err) => {
        console.error('Error al registrar venta', err);
        alert('Error al registrar venta: ' + (err.error?.message || 'Verifique la consola'));
      }
    });
  }

  guardarDetallesIndividualmente(detalles: any[], idVenta: string) {
    const detallesIds: string[] = [];
    let detallesGuardados = 0;
    let errores = 0;

    if (detalles.length === 0) {
      this.actualizarVentaConDetallesIds(idVenta, detallesIds);
      return;
    }

    detalles.forEach(detalle => {

      const detalleConVenta = {
        ...detalle,
        id_venta: idVenta
      };

      console.log('Guardando detalle:', detalleConVenta);

      this.ventasService.guardarDetalleVenta(detalleConVenta).subscribe({
        next: (detalleGuardado) => {
          console.log('Detalle guardado:', detalleGuardado);
          if (detalleGuardado && detalleGuardado.id_detalle) {
            detallesIds.push(detalleGuardado.id_detalle);
          }
          detallesGuardados++;


          if (detallesGuardados + errores === detalles.length) {
            if (errores === 0) {
              this.actualizarVentaConDetallesIds(idVenta, detallesIds);
            } else {
              alert(`Venta guardada pero con ${errores} errores en detalles`);
              this.router.navigate(['/listaVentas']);
            }
          }
        },
        error: (err) => {
          console.error('Error al guardar detalle:', err);
          errores++;
          detallesGuardados++;

          if (detallesGuardados + errores === detalles.length) {
            if (errores > 0) {
              alert(`Venta guardada pero con ${errores} errores en detalles`);
              this.router.navigate(['/listaVentas']);
            }
          }
        }
      });
    });
  }

  actualizarVentaConDetallesIds(idVenta: string, detallesIds: string[]) {

    this.ventasService.buscarVentaById(idVenta).subscribe({
      next: (ventaActual) => {

        const ventaActualizada = {
          ...ventaActual,
          detalles: detallesIds
        };


        this.ventasService.editarVenta(idVenta, ventaActualizada).subscribe({
          next: () => {
            alert('Venta registrada correctamente');
            this.router.navigate(['/listaVentas']);
          },
          error: (err) => {
            console.error('Error al actualizar venta con detalles', err);
            alert('Venta guardada pero error al actualizar detalles');
          }
        });
      },
      error: (err) => {
        console.error('Error al obtener venta para actualizar', err);
        alert('Venta guardada pero error al actualizar detalles');
      }
    });
  }
}