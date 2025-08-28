import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRegistroProveedor } from './formulario-registro-proveedor';

describe('FormularioRegistroProveedor', () => {
  let component: FormularioRegistroProveedor;
  let fixture: ComponentFixture<FormularioRegistroProveedor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioRegistroProveedor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioRegistroProveedor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
