import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { proveedorService } from '../../../services/proveedor';
import { Proveedor } from '../../proveedor/formulario-registro-proveedor/proveedor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-proveedor',
  imports: [FormsModule],
  templateUrl: './tabla-proveedor.html',
  styleUrl: './tabla-proveedor.css'
})
export class TablaProveedor {
  proveedores: Proveedor[] = [];

  constructor(
    private proveedorService: proveedorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarProveedores();
  }

  cargarProveedores() {
    this.proveedorService.leerProveedor().subscribe(data => {
      this.proveedores = data;
    });
  }

  editarProveedor(id: string) {
    this.router.navigate(['/editar-proveedor', id]);
  }

  eliminarProveedor(id: string) {
    this.proveedorService.eliminarProveedor(id).subscribe(() => {
      this.cargarProveedores();
    });
  }
}
