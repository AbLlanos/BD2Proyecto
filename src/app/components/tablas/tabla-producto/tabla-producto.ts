import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Producto } from '../../products/lista-productos/productos';
import { ProductosServices } from '../../../services/productos';

@Component({
  selector: 'app-tabla-producto',
  imports: [ FormsModule],
  templateUrl: './tabla-producto.html',
  styleUrl: './tabla-producto.css'
})
export class TablaProducto {

   productos: Producto[] = [];

  constructor(
    private productoService: ProductosServices,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.leerProductos().subscribe(data => {
      this.productos = data;
    });
  }

  editarProducto(id: string) {
    this.router.navigate(['/editar-producto', id]);
  }

  eliminarProducto(id: string) {
    this.productoService.eliminarProducto(id).subscribe(() => {
      this.cargarProductos();
    });
  }

}
