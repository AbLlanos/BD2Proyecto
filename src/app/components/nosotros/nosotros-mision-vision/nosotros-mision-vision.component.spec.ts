import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosMisionVisionComponent } from './nosotros-mision-vision.component';

describe('NosotrosMisionVisionComponent', () => {
  let component: NosotrosMisionVisionComponent;
  let fixture: ComponentFixture<NosotrosMisionVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NosotrosMisionVisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosotrosMisionVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
