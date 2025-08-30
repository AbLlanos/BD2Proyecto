import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'http://localhost:8080/api/clientes/registrar'; // URL backend

  constructor(private http: HttpClient) { }

  registrarCliente(cliente: any): Observable<any> {
    return this.http.post(this.apiUrl, cliente);
  }
}
