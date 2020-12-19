import { TestBed } from '@angular/core/testing';

import { AllocatefundService } from './allocatefund.service';

describe('AllocatefundService', () => {
  let service: AllocatefundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllocatefundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
