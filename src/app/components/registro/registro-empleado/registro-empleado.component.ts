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
  ) {}

ngOnInit(): void {
  this.empleadoForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    apellido: ['', [Validators.required, Validators.minLength(2)]],
    cargo: ['', [Validators.required, Validators.minLength(2)]],
    salario: [0, [Validators.required, Validators.min(0.01)]],
    usuario: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    rol: ['EMPLEADO', Validators.required]
  });
}


  registrarEmpleado() {
    if (this.empleadoForm.invalid) {
      this.empleadoForm.markAllAsTouched();
      return;
    }

    const empleado: Empleado = this.empleadoForm.value;

    this.empleadoService.guardarEmpleado(empleado).subscribe(() => {
      alert("Empleado registrado correctamente");
      this.router.navigate(['/home']);
    });
  }
}
