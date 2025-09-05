import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosServices } from '../../../services/productos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-producto',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './editar-producto.html',
  styleUrl: './editar-producto.css'
})
export class EditarProducto {

    productoForm!: FormGroup;
  id!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductosServices
  ) {}

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

    this.productoService.buscarProductobyId(this.id).subscribe(producto => {
      this.productoForm.patchValue(producto);
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

