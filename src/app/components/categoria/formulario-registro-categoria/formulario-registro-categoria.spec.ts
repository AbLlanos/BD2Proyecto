import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRegistroCategoria } from './formulario-registro-categoria';

describe('FormularioRegistroCategoria', () => {
  let component: FormularioRegistroCategoria;
  let fixture: ComponentFixture<FormularioRegistroCategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioRegistroCategoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioRegistroCategoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
