import { TestBed } from '@angular/core/testing';

import { MloverlayService } from './mloverlay.service';

describe('MloverlayService', () => {
  let service: MloverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MloverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
