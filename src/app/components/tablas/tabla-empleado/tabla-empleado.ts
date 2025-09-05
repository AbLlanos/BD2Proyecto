import { Component } from '@angular/core';
import { Empleado } from '../../registro/registro-empleado/empleadoInterface';
import { EmpleadoService } from '../../../services/empleado';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-empleado',
  imports: [RouterLink,FormsModule],
  templateUrl: './tabla-empleado.html',
  styleUrl: './tabla-empleado.css'
})
export class TablaEmpleado {

  empleados: Empleado[] = [];

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  cargarEmpleados(): void {
    this.empleadoService.leerEmpleados().subscribe({
      next: (data) => this.empleados = data,
      error: (err) => console.error('Error al cargar empleados:', err)
    });
  }

  eliminarEmpleado(id: string): void {
    if (confirm("¿Seguro que deseas eliminar este empleado?")) {
      this.empleadoService.eliminarEmpleado((id)).subscribe({
        next: () => this.empleados = this.empleados.filter(e => e.id_empleado !== id),
        error: err => console.error("Error al eliminar empleado:", err)
      });
    }
  }

}
