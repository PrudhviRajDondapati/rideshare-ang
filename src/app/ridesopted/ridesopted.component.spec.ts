import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidesoptedComponent } from './ridesopted.component';

describe('RidesoptedComponent', () => {
  let component: RidesoptedComponent;
  let fixture: ComponentFixture<RidesoptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RidesoptedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RidesoptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
