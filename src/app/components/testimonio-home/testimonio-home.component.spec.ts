import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonioHomeComponent } from './testimonio-home.component';

describe('TestimonioHomeComponent', () => {
  let component: TestimonioHomeComponent;
  let fixture: ComponentFixture<TestimonioHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TestimonioHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonioHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
