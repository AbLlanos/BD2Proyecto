import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Cliente } from '../../registro/registro-cliente/clienteInterface';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-tabla-cliente',
  imports: [RouterLink, FormsModule],
  templateUrl: './tabla-cliente.html',
  styleUrl: './tabla-cliente.css'
})
export class TablaCliente {

 clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(): void {
    this.clienteService.leerClientes().subscribe({
      next: (data) => {
        this.clientes = data;
      },
      error: (err) => {
        console.error('Error al cargar clientes', err);
      }
    });
  }

  eliminarCliente(id: string): void {
    if (!confirm('¿Está seguro de eliminar este cliente?')) return;

    this.clienteService.eliminarCliente(id).subscribe({
      next: () => {
        this.clientes = this.clientes.filter(cliente => cliente.id_cliente !== id);
        alert('Cliente eliminado correctamente');
      },
      error: (err) => {
        console.error('Error al eliminar cliente', err);
        alert('No se pudo eliminar el cliente');
      }
    });
  }

}
