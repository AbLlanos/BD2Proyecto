import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEmpleado } from './tabla-empleado';

describe('TablaEmpleado', () => {
  let component: TablaEmpleado;
  let fixture: ComponentFixture<TablaEmpleado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaEmpleado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaEmpleado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
