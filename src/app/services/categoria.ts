import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../components/products/lista-productos/productos';
import { Observable } from 'rxjs';
import { Categoria } from '../components/categoria/formulario-registro-categoria/categoria';

@Injectable({
  providedIn: 'root'
})
export class categoriaService {

    private API_CATEGORIA = "http://localhost:8080/categoria";
  
    constructor(private http: HttpClient) { }
  
    // Mostrar 
    leerCategoria(): Observable<Categoria[]> {
      return this.http.get<Categoria[]>(this.API_CATEGORIA, { withCredentials: false });
    }
  
    // Guardar 
    guardarCategoria(categoria: Categoria): Observable<Categoria> {
      return this.http.post<Categoria>(`${this.API_CATEGORIA}/guardar`, categoria, { withCredentials: false });
    }
  
    // Buscar por ID
    buscarCategoriabyId(id: string): Observable<Categoria> {
      return this.http.get<Categoria>(`${this.API_CATEGORIA}/${id}`, { withCredentials: false });
    }
  
    // Eliminar 
    eliminarCategoria(id: string): Observable<void> {
      return this.http.delete<void>(`${this.API_CATEGORIA}/eliminar/${id}`, { withCredentials: false });
    }
  
    // Editar 
    editarCategoria(id: string, categoria: Categoria): Observable<Categoria> {
      return this.http.put<Categoria>(`${this.API_CATEGORIA}/actualizar/${id}`, categoria, { withCredentials: false });
    }

  
}
