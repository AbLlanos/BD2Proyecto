import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClienteService } from '../../../services/cliente.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-cliente',
  imports: [CommonModule,ReactiveFormsModule ],
  templateUrl: './editar-cliente.html',
  styleUrl: './editar-cliente.css'
})
export class EditarCliente {

  clienteForm!: FormGroup;
  id!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;

    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      direccion: ['', Validators.required],
      password: ['', Validators.required],
      rol: ['CLIENTE']
    });

    // 📌 cargar datos del cliente
    this.clienteService.buscarClienteById(this.id).subscribe(cliente => {
      this.clienteForm.patchValue(cliente);
    });
  }

  onSubmit() {
    if (this.clienteForm.valid) {
      this.clienteService.editarCliente(this.id, this.clienteForm.value).subscribe(() => {
        alert('Cliente actualizado correctamente');
        this.router.navigate(['/listaClientes']);
      });
    }
  }

}
