import { Component } from '@angular/core';
import { Navbar } from "../../general/navbar/navbar";
import { Footer } from "../../general/footer/footer";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { categoriaService } from '../../../services/categoria';
import { Categoria } from './categoria';

@Component({
  selector: 'app-formulario-registro-categoria',
  imports: [CommonModule, ReactiveFormsModule,],
  templateUrl: './formulario-registro-categoria.html',
  styleUrl: './formulario-registro-categoria.css'
})
export class FormularioRegistroCategoria {

 categoriaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoriaService: categoriaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoriaForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  registrarCategoria() {
    if (this.categoriaForm.invalid) {
      this.categoriaForm.markAllAsTouched();
      return;
    }

    const categoria: Categoria = this.categoriaForm.value;

    this.categoriaService.guardarCategoria(categoria).subscribe(() => {
      alert("Categoría registrada correctamente");
      this.router.navigate(['/home']);
    });
  }
}
