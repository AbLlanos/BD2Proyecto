import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venta } from '../components/venta/ventaInterface';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private API_VENTA = "http://localhost:8080/venta";
  private API_DETALLES = "http://localhost:8080/venta-detalle";

  constructor(private http: HttpClient) {}

  // Leer todas las ventas
  leerVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.API_VENTA);
  }

  // Guardar venta PRINCIPAL (sin detalles)
  guardarVenta(venta: Venta): Observable<Venta> {
    return this.http.post<Venta>(`${this.API_VENTA}/guardar`, venta);
  }

// En tu VentasService - CORREGIDO
  guardarDetalleVenta(detalle: any): Observable<any> {
    return this.http.post<any>(`${this.API_DETALLES}/guardar`, detalle);
  }


  guardarDetallesLote(detalles: any[]): Observable<any[]> {
  return this.http.post<any[]>(`${this.API_DETALLES}/guardar-lote`, detalles);
}

  // Buscar venta por ID - CAMBIADO A STRING
  buscarVentaById(id: string): Observable<Venta> {
    return this.http.get<Venta>(`${this.API_VENTA}/${id}`);
  }

  // Eliminar venta - CAMBIADO A STRING
  eliminarVenta(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_VENTA}/eliminar/${id}`);
  }

  // Actualizar venta - CAMBIADO A STRING
  editarVenta(id: string, venta: Venta): Observable<Venta> {
    return this.http.put<Venta>(`${this.API_VENTA}/actualizar/${id}`, venta);
  }

  // MÉTODOS NUEVOS PARA DETALLES:

  // Obtener detalles por ID de venta
  obtenerDetallesPorVenta(idVenta: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_DETALLES}/venta/${idVenta}`);
  }

  // Eliminar detalle específico
  eliminarDetalle(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_DETALLES}/eliminar/${id}`);
  }

  // Actualizar detalle
  actualizarDetalle(id: string, detalle: any): Observable<any> {
    return this.http.put<any>(`${this.API_DETALLES}/actualizar/${id}`, detalle);
  }
}