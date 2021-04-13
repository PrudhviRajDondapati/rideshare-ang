import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidespostedListComponent } from './ridesposted-list.component';

describe('RidespostedListComponent', () => {
  let component: RidespostedListComponent;
  let fixture: ComponentFixture<RidespostedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RidespostedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RidespostedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
