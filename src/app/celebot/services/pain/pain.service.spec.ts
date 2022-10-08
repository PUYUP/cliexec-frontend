import { TestBed } from '@angular/core/testing';

import { PainService } from './pain.service';

describe('PainService', () => {
  let service: PainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
