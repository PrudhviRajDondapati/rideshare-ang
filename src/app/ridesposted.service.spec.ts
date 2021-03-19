import { TestBed } from '@angular/core/testing';

import { RidespostedService } from './ridesposted.service';

describe('RidespostedService', () => {
  let service: RidespostedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RidespostedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
