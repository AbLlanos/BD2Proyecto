import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { categoriaService } from '../../../services/categoria';

@Component({
  selector: 'app-editar-categoria',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './editar-categoria.html',
  styleUrl: './editar-categoria.css'
})
export class EditarCategoria implements OnInit {

  categoriaForm!: FormGroup;
  idCategoria!: string;

  constructor(
    private fb: FormBuilder,
    private servicioCategoria: categoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Inicializar el form vacío
    this.categoriaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      descripcion: ['', [Validators.required, Validators.minLength(5)]]
    });

    // Capturar el id de la URL
    this.idCategoria = this.route.snapshot.paramMap.get('id') || '';

    // Cargar los datos de la categoría
    if (this.idCategoria) {
      this.servicioCategoria.buscarCategoriabyId(this.idCategoria).subscribe(categoria => {
        this.categoriaForm.patchValue({
          nombre: categoria.nombre,
          descripcion: categoria.descripcion
        });
      });
    }
  }

  onSubmit(): void {
    if (this.categoriaForm.valid) {
      this.servicioCategoria.editarCategoria(this.idCategoria, this.categoriaForm.value)
        .subscribe(() => {
          alert('Categoría actualizada con éxito');
          this.router.navigate(['/home']);
        }, error => {
          console.error("Error al actualizar categoría", error);
        });
    }
  }
}
