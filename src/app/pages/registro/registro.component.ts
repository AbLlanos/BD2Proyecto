import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/general/navbar/navbar';
import { HeroRegistroComponent } from '../../components/registro/hero-registro/hero-registro.component';
import { RegistroEmpleadoComponent } from '../../components/registro/registro-empleado/registro-empleado.component';
import { RegistroClienteComponent } from '../../components/registro/registro-cliente/registro-cliente.component';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    HeroRegistroComponent,
    RegistroEmpleadoComponent,
    RegistroClienteComponent,
  ],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  showEmpleado = false;
  showCliente = false;

  toggleForm(tipo: 'empleado' | 'cliente') {
    if (tipo === 'empleado') {
      this.showEmpleado = !this.showEmpleado;
      this.showCliente = false;
    } else if (tipo === 'cliente') {
      this.showCliente = !this.showCliente;
      this.showEmpleado = false;
    }
  }
}
  