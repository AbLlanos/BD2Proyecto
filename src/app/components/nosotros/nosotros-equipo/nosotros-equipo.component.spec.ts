import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosEquipoComponent } from './nosotros-equipo.component';

describe('NosotrosEquipoComponent', () => {
  let component: NosotrosEquipoComponent;
  let fixture: ComponentFixture<NosotrosEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NosotrosEquipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosotrosEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
