import { TestBed } from '@angular/core/testing';

import { RestApisService } from './rest-apis.service';

describe('RestApisService', () => {
  let service: RestApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
