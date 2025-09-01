import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venta } from '../components/venta/ventaInterface';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private API_VENTA = "http://localhost:8080/venta";

  constructor(private http: HttpClient) {}

  // Leer todas las ventas
  leerVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.API_VENTA);
  }

  // Guardar venta
  guardarVenta(venta: Venta): Observable<Venta> {
    return this.http.post<Venta>(`${this.API_VENTA}/guardar`, venta);
  }

  // Buscar venta por ID
  buscarVentaById(id: number): Observable<Venta> {
    return this.http.get<Venta>(`${this.API_VENTA}/${id}`);
  }

  // Eliminar venta
  eliminarVenta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_VENTA}/eliminar/${id}`);
  }

  // Actualizar venta
  editarVenta(id: number, venta: Venta): Observable<Venta> {
    return this.http.put<Venta>(`${this.API_VENTA}/actualizar/${id}`, venta);
  }
}
