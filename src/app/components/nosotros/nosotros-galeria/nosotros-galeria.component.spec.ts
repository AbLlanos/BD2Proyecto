import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosGaleriaComponent } from './nosotros-galeria.component';

describe('NosotrosGaleriaComponent', () => {
  let component: NosotrosGaleriaComponent;
  let fixture: ComponentFixture<NosotrosGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NosotrosGaleriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosotrosGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
