import { TestBed, async, inject } from '@angular/core/testing';

import { PostResolveGuard } from './post-resolve.guard';

describe('PostResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostResolveGuard]
    });
  });

  it('should ...', inject([PostResolveGuard], (guard: PostResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
