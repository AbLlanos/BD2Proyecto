import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../../../services/empleado';
import { CommonModule } from '@angular/common';
import { Empleado } from '../../registro/registro-empleado/empleadoInterface';

@Component({
  selector: 'app-editar-empleado',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './editar-empleado.html',
  styleUrl: './editar-empleado.css'
})
export class EditarEmpleado {


  empleadoForm!: FormGroup;
  idEmpleado!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private empleadoService: EmpleadoService
  ) { }

  ngOnInit(): void {
    this.idEmpleado = this.route.snapshot.paramMap.get('id')!;

    // Inicializa el formulario
    this.empleadoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      cargo: ['', Validators.required],
      salario: [0, [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rol: ['EMPLEADO']
    });

    // Cargar datos del empleado en el formulario
    this.empleadoService.buscarEmpleadoById(this.idEmpleado).subscribe({
      next: (empleado: Empleado) => this.empleadoForm.patchValue(empleado),
      error: (err) => console.error('Error al cargar empleado', err)
    });
  }

  actualizarEmpleado(): void {
    if (this.empleadoForm.valid) {
      const empleadoActualizado: Empleado = this.empleadoForm.value;

      this.empleadoService.editarEmpleado(this.idEmpleado, empleadoActualizado).subscribe({
        next: () => {
          alert('Empleado actualizado correctamente');
          this.router.navigate(['/home']);
        },
        error: (err) => console.error('Error al actualizar empleado', err)
      });
    }
  }


}
