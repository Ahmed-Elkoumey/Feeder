import { TestBed } from '@angular/core/testing';

import { CuonterService } from './cuonter.service';

describe('CuonterService', () => {
  let service: CuonterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuonterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
