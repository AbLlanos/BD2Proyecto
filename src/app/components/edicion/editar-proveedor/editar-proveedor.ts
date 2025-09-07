import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { proveedorService } from '../../../services/proveedor';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { categoriaService } from '../../../services/categoria';

@Component({
  selector: 'app-editar-proveedor',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './editar-proveedor.html',
  styleUrl: './editar-proveedor.css'
})
export class EditarProveedor {


  proveedorForm!: FormGroup;
  idProveedor!: string;

  constructor(
    private fb: FormBuilder,
    private proveedorService: proveedorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Inicializar el formulario vacío
    this.proveedorForm = this.fb.group({
      nombre: ['', Validators.required],
      ruc: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      razon_social: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      direccion: ['', Validators.required],
      estado: ['', Validators.required]
    });

    // Capturar el id del proveedor de la URL
    this.idProveedor = this.route.snapshot.paramMap.get('id') || '';

    // Cargar datos del proveedor
    if (this.idProveedor) {
      this.proveedorService.buscarProveedorbyId(this.idProveedor).subscribe(prov => {
        this.proveedorForm.patchValue({
          nombre: prov.nombre,
          ruc: prov.ruc,
          razon_social: prov.razon_social,
          correo: prov.correo,
          telefono: prov.telefono,
          direccion: prov.direccion,
          estado: prov.estado
        });
      });
    }
  }

  actualizarProveedor(): void {
    if (this.proveedorForm.valid) {
      this.proveedorService.editarProveedor(this.idProveedor, this.proveedorForm.value)
        .subscribe(() => {
          alert('Proveedor actualizado correctamente');
          this.router.navigate(['/registro-proveedor']);
        }, error => {
          console.error("Error al actualizar proveedor", error);
        });
    }
  }

}



