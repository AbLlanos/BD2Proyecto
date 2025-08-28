import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from '../components/proveedor/formulario-registro-proveedor/proveedor';

@Injectable({
  providedIn: 'root'
})
export class proveedorService {
  
    private API_PROVEEDOR = "http://localhost:8080/proveedor";

  constructor(private http: HttpClient) { }

  leerProveedor(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(this.API_PROVEEDOR, { withCredentials: false });
  }

  guardarProveedor(proveedor: Proveedor): Observable<Proveedor> {
    return this.http.post<Proveedor>(`${this.API_PROVEEDOR}/guardar`, proveedor, { withCredentials: false });
  }

  buscarProveedorbyId(id: string): Observable<Proveedor> {
    return this.http.get<Proveedor>(`${this.API_PROVEEDOR}/${id}`, { withCredentials: false });
  }

  eliminarProveedor(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_PROVEEDOR}/eliminar/${id}`, { withCredentials: false });
  }

  editarProveedor(id: string, proveedor: Proveedor): Observable<Proveedor> {
    return this.http.put<Proveedor>(`${this.API_PROVEEDOR}/actualizar/${id}`, proveedor, { withCredentials: false });
  }

}
