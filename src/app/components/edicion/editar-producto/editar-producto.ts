import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosServices } from '../../../services/productos';
import { CommonModule } from '@angular/common';
import { Categoria } from '../../categoria/formulario-registro-categoria/categoria';
import { Proveedor } from '../../proveedor/formulario-registro-proveedor/proveedor';
import { categoriaService } from '../../../services/categoria';
import { proveedorService } from '../../../services/proveedor';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './editar-producto.html',
  styleUrls: ['./editar-producto.css']
})
export class EditarProducto {

  productoForm!: FormGroup;
  id!: string;
  categorias: Categoria[] = [];
  proveedores: Proveedor[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductosServices,
    private categoriaService: categoriaService,
    private proveedorService: proveedorService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;

    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: [0, Validators.required],
      cantidad: [0, Validators.required],
      iva: [0, Validators.required],
      imgUrl: ['', Validators.required],
      id_categoria: ['', Validators.required],
      id_proveedor: ['', Validators.required],
    });

    // 📌 cargar datos del producto
    this.productoService.buscarProductobyId(this.id).subscribe(producto => {
      this.productoForm.patchValue(producto);
    });

    // 📌 cargar categorías
    this.categoriaService.leerCategoria().subscribe(data => {
      this.categorias = data;
    });

    // 📌 cargar proveedores
    this.proveedorService.leerProveedor().subscribe(data => {
      this.proveedores = data;
    });
  }

  onSubmit() {
    if (this.productoForm.valid) {
      this.productoService.editarProducto(this.id, this.productoForm.value).subscribe(() => {
        this.router.navigate(['/listaProductos']);
      });
    }
  }
}
