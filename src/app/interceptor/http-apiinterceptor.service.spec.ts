import { TestBed, inject } from '@angular/core/testing';

import { HttpApiinterceptorService } from './http-apiinterceptor.service';

describe('HttpApiinterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpApiinterceptorService]
    });
  });

  it('should be created', inject([HttpApiinterceptorService], (service: HttpApiinterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
