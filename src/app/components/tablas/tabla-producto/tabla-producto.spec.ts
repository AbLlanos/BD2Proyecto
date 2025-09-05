import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProducto } from './tabla-producto';

describe('TablaProducto', () => {
  let component: TablaProducto;
  let fixture: ComponentFixture<TablaProducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaProducto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaProducto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
