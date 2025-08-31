import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { proveedorService } from '../../../services/proveedor';
import { Proveedor } from './proveedor';
import { Navbar } from "../../general/navbar/navbar";


@Component({
  selector: 'app-formulario-registro-proveedor',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-registro-proveedor.html',
  styleUrl: './formulario-registro-proveedor.css'
})


export class FormularioRegistroProveedor {
proveedorForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private proveedorService: proveedorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.proveedorForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      ruc: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(13)]],
      razon_social: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.minLength(7)]],
      direccion: ['', Validators.required],
      estado: [true] 
    });
  }

  registrarProveedor() {
    if (this.proveedorForm.invalid) {
      this.proveedorForm.markAllAsTouched();
      return;
    }

    const proveedor: Proveedor = this.proveedorForm.value;

    this.proveedorService.guardarProveedor(proveedor).subscribe({
      next: () => {
        alert('Proveedor registrado correctamente');
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Error al registrar proveedor:', err);
        alert('Hubo un error al registrar el proveedor.');
      }
    });
  }
}