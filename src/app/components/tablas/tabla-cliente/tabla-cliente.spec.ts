import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCliente } from './tabla-cliente';

describe('TablaCliente', () => {
  let component: TablaCliente;
  let fixture: ComponentFixture<TablaCliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaCliente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaCliente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
