import { TestBed, inject } from '@angular/core/testing';

import { FakeHttpInterceptorService } from './fake-http-interceptor.service';

describe('FakeHttpInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeHttpInterceptorService]
    });
  });

  it('should be created', inject([FakeHttpInterceptorService], (service: FakeHttpInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
