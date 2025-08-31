import { Component } from '@angular/core';
import { Navbar } from "../../components/general/navbar/navbar";
import { Footer } from "../../components/general/footer/footer";
import { Hero } from '../../components/home/hero/hero';
import { HeroHomeComponent } from "../../components/hero-home/hero-home.component";
import { OfertasEspecialesComponent } from "../../components/ofertas-especiales/ofertas-especiales.component";
import { TestimonioHomeComponent } from "../../components/testimonio-home/testimonio-home.component";

@Component({
  selector: 'app-home',
  imports: [Navbar, HeroHomeComponent, OfertasEspecialesComponent, TestimonioHomeComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
