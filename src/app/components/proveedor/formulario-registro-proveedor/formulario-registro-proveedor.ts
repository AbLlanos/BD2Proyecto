import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { proveedorService } from '../../../services/proveedor';
import { Proveedor } from './proveedor';
import { CommonModule } from '@angular/common';
import { Navbar } from "../../general/navbar/navbar";

@Component({
  selector: 'app-formulario-registro-proveedor',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, Navbar],
  templateUrl: './formulario-registro-proveedor.html',
  styleUrl: './formulario-registro-proveedor.css'
})
export class FormularioRegistroProveedor {

proveedorForm!: FormGroup;

  constructor(private fb: FormBuilder, private proveedorService: proveedorService) {}

  ngOnInit(): void {
    this.proveedorForm = this.fb.group({
      nombre: ['', Validators.required]
    });
  }

  guardarProveedor(): void {
    if (this.proveedorForm.valid) {
      const proveedor: Proveedor = this.proveedorForm.value;
      this.proveedorService.guardarProveedor(proveedor).subscribe({
        next: (data) => {
          alert("Proveedor guardado con éxito");
          this.proveedorForm.reset();
        },
        error: (err) => {
          console.error(err);
          alert("Error al guardar el proveedor");
        }
      });
    }
  }
}
