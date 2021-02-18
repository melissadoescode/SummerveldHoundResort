import { TestBed } from '@angular/core/testing';

import { DoggoProfileService } from './doggo-profile.service';

describe('DoggoProfileService', () => {
  let service: DoggoProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoggoProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
