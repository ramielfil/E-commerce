import { TestBed } from '@angular/core/testing';

import { marqueServiceService } from './marque.service';

describe('MarqueService', () => {
  let service: marqueServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(marqueServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
