import { Component } from '@angular/core';
import { Navbar } from "../../general/navbar/navbar";
import { Producto } from './productos';
import { ProductosServices } from '../../../services/productos';
import { Categoria } from '../../categoria/formulario-registro-categoria/categoria';
import { Proveedor } from '../../proveedor/formulario-registro-proveedor/proveedor';
import { categoriaService } from '../../../services/categoria';
import { proveedorService } from '../../../services/proveedor';


@Component({
  selector: 'app-lista-productos',
  imports: [Navbar],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css'
})
export class ListaProductos {

  productos: Producto[] = [];
  categorias: Categoria[] = [];
  proveedores: Proveedor[] = [];

  constructor(
    private productoService: ProductosServices,
    private categoriaService: categoriaService,
    private proveedorService: proveedorService
  ) { }

  ngOnInit(): void {
    this.cargarCategorias();
    this.cargarProveedores();
    this.cargarProductos();
  }

  cargarCategorias() {
    this.categoriaService.leerCategoria().subscribe({
      next: data => this.categorias = data,
      error: err => console.error('Error al cargar categorías:', err)
    });
  }

  cargarProveedores() {
    this.proveedorService.leerProveedor().subscribe({
      next: data => this.proveedores = data,
      error: err => console.error('Error al cargar proveedores:', err)
    });
  }

  cargarProductos() {
    this.productoService.leerProductos().subscribe({
      next: data => this.productos = data,
      error: err => console.error('Error al cargar productos:', err)
    });
  }

  getNombreCategoria(producto: Producto): string {
    return producto.categoria ? producto.categoria.nombre : 'Sin categoría';
  }

  getNombreProveedor(producto: Producto): string {
    return producto.proveedor ? producto.proveedor.nombre : 'Sin proveedor';
  }

  comprar(producto: Producto): void {
    if (producto.cantidad > 0) {
      producto.cantidad--;
    } else {
      alert('No hay más unidades disponibles');
    }
  }
}
