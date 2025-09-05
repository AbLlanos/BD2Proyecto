import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { categoriaService } from '../../../services/categoria';

@Component({
  selector: 'app-tabla-categoria',
  imports: [RouterLink, FormsModule],
  templateUrl: './tabla-categoria.html',
  styleUrl: './tabla-categoria.css'
})
export class TablaCategoria {
  categorias: any[] = [];

  constructor(private servicioCategoria: categoriaService) { }

  ngOnInit(): void {
    this.servicioCategoria.leerCategoria().subscribe(data => {
      this.categorias = data;
    });
  }

  eliminarCategoria(id: string): void {
    this.servicioCategoria.eliminarCategoria(id).subscribe(() => {
      this.categorias = this.categorias.filter(categoria => categoria.id_categoria !== id);
    }, error => {
      console.log("Error al eliminar categoría", error);
    });
  }
}
