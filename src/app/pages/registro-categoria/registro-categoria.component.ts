import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/general/navbar/navbar';
import { Footer } from '../../components/general/footer/footer';
import { CrearCategoriaComponent } from "../../components/categoria/crear-categoria/crear-categoria.component";

@Component({
  selector: 'app-registro-categoria',
  standalone: true,
  imports: [CommonModule, Navbar, Footer, RegistroCategoriaComponent, CrearCategoriaComponent],
  templateUrl: './registro-categoria.component.html',
  styleUrls: ['./registro-categoria.component.css']
})
export class RegistroCategoriaComponent {

}
