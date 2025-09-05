import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../components/registro/registro-empleado/empleadoInterface';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private API_EMPLEADO = "http://localhost:8080/empleado";

  constructor(private http: HttpClient) { }

  // Leer todos
  leerEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.API_EMPLEADO);
  }

  // Guardar
  guardarEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(`${this.API_EMPLEADO}/guardar`, empleado);
  }

  // Buscar por ID
  buscarEmpleadoById(id: string): Observable<Empleado> {
    return this.http.get<Empleado>(`${this.API_EMPLEADO}/${id}`);
  }


  // Eliminar
  eliminarEmpleado(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_EMPLEADO}/eliminar/${id}`);
  }

  // Editar
  editarEmpleado(id: string, empleado: Empleado): Observable<Empleado> {
    return this.http.put<Empleado>(`${this.API_EMPLEADO}/actualizar/${id}`, empleado);
  }
}
