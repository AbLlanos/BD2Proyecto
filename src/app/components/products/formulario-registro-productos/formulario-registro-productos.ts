import { Component } from '@angular/core';
import { Navbar } from "../../general/navbar/navbar";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosServices } from '../../../services/productos';
import { categoriaService } from '../../../services/categoria';
import { proveedorService } from '../../../services/proveedor';
import { Categoria } from '../../categoria/formulario-registro-categoria/categoria';
import { Proveedor } from '../../proveedor/formulario-registro-proveedor/proveedor';
import { EditarProducto } from "../../edicion/editar-producto/editar-producto";
import { TablaProducto } from "../../tablas/tabla-producto/tabla-producto";

@Component({
  selector: 'app-formulario-registro-productos',
  imports: [Navbar, CommonModule, FormsModule, ReactiveFormsModule, TablaProducto],
  templateUrl: './formulario-registro-productos.html',
  styleUrl: './formulario-registro-productos.css'
})
export class FormularioRegistroProductos {

  productoForm!: FormGroup;
  categorias: Categoria[] = [];
  proveedores: Proveedor[] = [];

  constructor(
    private fb: FormBuilder,
    private productoService: ProductosServices,
    private categoriaService: categoriaService,
    private proveedorService: proveedorService,
    private router: Router
  ) {}

 ngOnInit(): void {
    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      precio: [0, [Validators.required, Validators.min(0.01)]],
      cantidad: [0, [Validators.required, Validators.min(0)]],
      iva: [0.15, [Validators.required, Validators.min(0), Validators.max(1)]],
      imgUrl: ['', [Validators.required]],
      id_categoria: ['', Validators.required],
      id_proveedor: ['', Validators.required]
    });

    this.categoriaService.leerCategoria().subscribe(data => this.categorias = data);
    this.proveedorService.leerProveedor().subscribe(data => this.proveedores = data);
  }

  agregarProducto() {
  if (this.productoForm.invalid) {
    this.productoForm.markAllAsTouched();
    return;
  }

  const formValue = this.productoForm.value;

  // ✅ ENVIAR los campos requeridos por el esquema MongoDB
  const productoAGuardar = {
    nombre: formValue.nombre,
    precio: formValue.precio,
    cantidad: formValue.cantidad,
    iva: formValue.iva,
    imgUrl: formValue.imgUrl,
    id_categoria: formValue.id_categoria,  
    id_proveedor: formValue.id_proveedor   
  };

  this.productoService.guardarProducto(productoAGuardar).subscribe({
    next: () => {
      alert('Producto registrado correctamente');
      this.router.navigate(['/listaProductos']);
    },
    error: (err) => {
      console.error('Error al guardar producto:', err);
      alert('Error al registrar producto');
    }
  });
}

}
