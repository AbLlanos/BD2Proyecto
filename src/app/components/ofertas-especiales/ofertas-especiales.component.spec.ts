import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasEspecialesComponent } from './ofertas-especiales.component';

describe('OfertasEspecialesComponent', () => {
  let component: OfertasEspecialesComponent;
  let fixture: ComponentFixture<OfertasEspecialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ OfertasEspecialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertasEspecialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
