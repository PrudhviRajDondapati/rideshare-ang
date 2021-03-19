import { TestBed } from '@angular/core/testing';

import { RidesoptedService } from './ridesopted.service';

describe('RidesoptedService', () => {
  let service: RidesoptedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RidesoptedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
