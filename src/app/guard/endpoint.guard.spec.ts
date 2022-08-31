import { TestBed } from '@angular/core/testing';

import { EndpointGuard } from './endpoint.guard';

describe('EndpointGuard', () => {
  let guard: EndpointGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EndpointGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
