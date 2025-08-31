import { Component } from '@angular/core';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent {
  tipo: string = 'cliente'; // Por defecto, se elige Cliente

  // Aquí puedes agregar lógica para gestionar el formulario y la selección del tipo de registro
}
