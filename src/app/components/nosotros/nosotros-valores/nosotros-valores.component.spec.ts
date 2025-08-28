import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosValoresComponent } from './nosotros-valores.component';

describe('NosotrosValoresComponent', () => {
  let component: NosotrosValoresComponent;
  let fixture: ComponentFixture<NosotrosValoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NosotrosValoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosotrosValoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
