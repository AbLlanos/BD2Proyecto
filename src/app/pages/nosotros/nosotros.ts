import { Component } from '@angular/core';
import { Navbar } from "../../components/general/navbar/navbar";
import { NosotrosEquipoComponent } from "../../components/nosotros/nosotros-equipo/nosotros-equipo.component";
import { NosotrosGaleriaComponent } from "../../components/nosotros/nosotros-galeria/nosotros-galeria.component";
import { NosotrosMisionVisionComponent } from "../../components/nosotros/nosotros-mision-vision/nosotros-mision-vision.component";
import { NosotrosValoresComponent } from "../../components/nosotros/nosotros-valores/nosotros-valores.component";
import { NosotrosHistoriaComponent } from "../../components/nosotros/nosotros-historia/nosotros-historia.component";

@Component({
  selector: 'app-nosotros',
  imports: [Navbar, NosotrosEquipoComponent, NosotrosGaleriaComponent, NosotrosMisionVisionComponent, NosotrosValoresComponent, NosotrosHistoriaComponent],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css'
})
export class Nosotros {

}
