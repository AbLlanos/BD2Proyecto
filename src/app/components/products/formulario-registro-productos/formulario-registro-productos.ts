import { Component } from '@angular/core';
import { Navbar } from "../../general/navbar/navbar";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Productos } from '../../../services/productos';

@Component({
  selector: 'app-formulario-registro-productos',
  imports: [Navbar, CommonModule, FormsModule, ReactiveFormsModule,],
  templateUrl: './formulario-registro-productos.html',
  styleUrl: './formulario-registro-productos.css'
})
export class FormularioRegistroProductos {

  productoForm!: FormGroup;

  constructor(private fb: FormBuilder, private productoService: Productos, private router: Router) { }

  ngOnInit(): void {
    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      precio: [0, [Validators.required, Validators.min(0.01)]],
      cantidad: [0, [Validators.required, Validators.min(0)]],
      iva: [0.15, [Validators.required, Validators.min(0), Validators.max(1)]],
      id_categoria: ['', Validators.required],
      id_proveedor: ['', Validators.required]
    });
  }

  agregarProducto() {
    if (this.productoForm.invalid) {
      this.productoForm.markAllAsTouched();
      return;
    }

    this.productoService.guardarProducto(this.productoForm.value).subscribe(() => {
      alert('Producto registrado correctamente');
      this.router.navigate(['/listaProductos']);
    });
  }

}
