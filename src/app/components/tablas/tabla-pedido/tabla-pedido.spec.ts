import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPedido } from './tabla-pedido';

describe('TablaPedido', () => {
  let component: TablaPedido;
  let fixture: ComponentFixture<TablaPedido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaPedido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaPedido);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
