import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../components/registro/registro-cliente/clienteInterface';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private API_CLIENTE = "http://localhost:8080/cliente";

  constructor(private http: HttpClient) {}

  // Leer todos los clientes
  leerClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API_CLIENTE);
  }

  // Guardar cliente
  guardarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.API_CLIENTE}/guardar`, cliente);
  }

  // Buscar cliente por ID
  buscarClienteById(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.API_CLIENTE}/${id}`);
  }

  // Eliminar cliente
  eliminarCliente(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_CLIENTE}/eliminar/${id}`);
  }

  // Editar cliente
  editarCliente(id: string, cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.API_CLIENTE}/actualizar/${id}`, cliente);
  }
}
