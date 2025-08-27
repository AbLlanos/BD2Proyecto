import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRegistroProductos } from './formulario-registro-productos';

describe('FormularioRegistroProductos', () => {
  let component: FormularioRegistroProductos;
  let fixture: ComponentFixture<FormularioRegistroProductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioRegistroProductos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioRegistroProductos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
