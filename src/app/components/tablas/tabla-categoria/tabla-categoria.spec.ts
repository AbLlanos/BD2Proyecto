import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCategoria } from './tabla-categoria';

describe('TablaCategoria', () => {
  let component: TablaCategoria;
  let fixture: ComponentFixture<TablaCategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaCategoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaCategoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
