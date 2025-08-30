import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/general/navbar/navbar';
import { Footer } from '../../components/general/footer/footer';
import { ComponenteProve1Component } from "../../components/proveedor/componente-prove1/componente-prove1.component";

@Component({
  selector: 'app-registro-proveedor',
  standalone: true,
  imports: [CommonModule, Navbar, Footer, ComponenteProve1Component],
  templateUrl: './registro-proveedor.component.html',
  styleUrls: ['./registro-proveedor.component.css']
})
export class RegistroProveedorComponent {

}
