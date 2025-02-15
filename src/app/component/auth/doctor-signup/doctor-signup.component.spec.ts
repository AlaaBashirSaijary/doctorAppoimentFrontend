import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSignupComponent } from './doctor-signup.component';

describe('DoctorSignupComponent', () => {
  let component: DoctorSignupComponent;
  let fixture: ComponentFixture<DoctorSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorSignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
