import { TestBed } from '@angular/core/testing';

import { CreateschemeService } from './createscheme.service';

describe('CreateschemeService', () => {
  let service: CreateschemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateschemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
