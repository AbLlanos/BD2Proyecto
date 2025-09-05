import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { proveedorService } from '../../../services/proveedor';
import { Proveedor } from './proveedor';
import { Navbar } from "../../general/navbar/navbar";
import { TablaProveedor } from "../../tablas/tabla-proveedor/tabla-proveedor";

@Component({
  selector: 'app-formulario-registro-proveedor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TablaProveedor],
  templateUrl: './formulario-registro-proveedor.html',
  styleUrl: './formulario-registro-proveedor.css'
})
export class FormularioRegistroProveedor implements OnInit {

  proveedorForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private proveedorService: proveedorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.proveedorForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      ruc: ['', [Validators.required, Validators.pattern('^[0-9]{13}$')]],
      razon_social: ['', Validators.required],
      correo: ['', [Validators.required, Validators.pattern('^[\\w\\.\\-]+@([\\w\\-]+\\.)+[\\w\\-]{2,4}$')]],
      telefono: ['', [Validators.required, Validators.minLength(7)]],
      direccion: ['', Validators.required],
      estado: ['', Validators.required] 
    });
  }


  registrarProveedor() {
    if (this.proveedorForm.invalid) {
      this.proveedorForm.markAllAsTouched();
      return;
    }

    const formValue = this.proveedorForm.value;

    const proveedorAGuardar: Proveedor = {
      ...formValue,
      fecha_registro: new Date(),
      productos: []
    };

    this.proveedorService.guardarProveedor(proveedorAGuardar).subscribe({
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
