import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidespostedComponent } from './ridesposted.component';

describe('RidespostedComponent', () => {
  let component: RidespostedComponent;
  let fixture: ComponentFixture<RidespostedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RidespostedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RidespostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
