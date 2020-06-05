import { TestBed } from '@angular/core/testing';

import { ServcovidService } from './servcovid.service';

describe('ServcovidService', () => {
  let service: ServcovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServcovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
