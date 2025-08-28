import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosHistoriaComponent } from './nosotros-historia.component';

describe('NosotrosHistoriaComponent', () => {
  let component: NosotrosHistoriaComponent;
  let fixture: ComponentFixture<NosotrosHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NosotrosHistoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosotrosHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
