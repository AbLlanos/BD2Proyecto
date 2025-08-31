import { Component } from '@angular/core';
import { Navbar } from "../general/navbar/navbar";
import { Footer } from "../general/footer/footer";

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css'],
  imports: [Navbar, Footer]
})
export class FormRegistroComponent {
  tipo: string = 'cliente'; // Por defecto, se elige Cliente

  // Aquí puedes agregar lógica para gestionar el formulario y la selección del tipo de registro
}
