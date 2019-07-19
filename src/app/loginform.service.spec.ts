import { TestBed } from '@angular/core/testing';

import { LoginformService } from './loginform.service';

describe('LoginformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginformService = TestBed.get(LoginformService);
    expect(service).toBeTruthy();
  });
});
