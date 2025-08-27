import { Component } from '@angular/core';
import { Navbar } from "../../general/navbar/navbar";
import { HttpClient } from '@angular/common/http';
import { Producto } from './productos';

@Component({
  selector: 'app-lista-productos',
  imports: [Navbar],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css'
})
export class ListaProductos {


  productos: Producto[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Datos de ejemplo para ver cómo se ve la galería
    this.productos = [
      {
        id_producto: 1,
        nombre: 'Coca Cola 500ml',
        precio: 1.50,
        cantidad: 10,
        iva: 0.12,
        id_categoria: 1,
        id_proveedor: 1,
        imgUrl: 'https://www.pharmacys.com.ec/wcsstore/DF_CatalogAsset/images/catalog/producto/fullimage/74762P-1.jpg'
      },
      {
        id_producto: 2,
        nombre: 'Papas Fritas',
        precio: 2.00,
        cantidad: 5,
        iva: 0.12,
        id_categoria: 2,
        id_proveedor: 2,
        imgUrl: 'https://www.supermaxi.com/wp-content/uploads/2021/06/7861042557296-1-2.jpg.webp'
      }
    ];
    /*
      ngOnInit(): void {
        this.http.get<Producto[]>('assets/productos.json').subscribe(data => {
          this.productos = data;
          console.log(this.productos);
        });
      }
    */
  }

  comprar(producto: Producto): void {
    if (producto.cantidad > 0) {
      producto.cantidad--;
    } else {
      alert('No hay más unidades disponibles');
    }
  }
}