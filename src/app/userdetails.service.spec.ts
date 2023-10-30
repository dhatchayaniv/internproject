import { TestBed } from '@angular/core/testing';

import { UserDetailsService } from './userdetails.service';

describe('UserdetailsService', () => {
  let service: UserdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
