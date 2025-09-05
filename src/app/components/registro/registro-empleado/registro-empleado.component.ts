import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadoService } from '../../../services/empleado';
import { Empleado } from './empleadoInterface';
import { Navbar } from "../../general/navbar/navbar";

@Component({
  selector: 'app-registro-empleado',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registro-empleado.component.html',
  styleUrls: ['./registro-empleado.component.css']
})
export class RegistroEmpleadoComponent {

  empleadoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.empleadoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      cargo: ['', [Validators.required, Validators.minLength(2)]],
      salario: [null, [Validators.required, Validators.min(0.01)]],
      email: ['', [Validators.required, Validators.pattern(/^[\w\.\-]+@([\w\-]+\.)+[\w\-]{2,4}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rol: ['EMPLEADO']
    });
  }


  registrarEmpleado() {
    if (this.empleadoForm.invalid) {
      this.empleadoForm.markAllAsTouched();
      return;
    }

    const formValue = this.empleadoForm.value;

    const empleadoAGuardar: Empleado = {
      ...formValue,
      rol: 'EMPLEADO'
    };

    this.empleadoService.guardarEmpleado(empleadoAGuardar).subscribe({
      next: () => {
        alert("Empleado registrado correctamente");
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Error al registrar empleado:', err);
        alert('Hubo un error al registrar el empleado.');
      }
    });
  }



}
