import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProveedor } from './tabla-proveedor';

describe('TablaProveedor', () => {
  let component: TablaProveedor;
  let fixture: ComponentFixture<TablaProveedor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaProveedor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaProveedor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
