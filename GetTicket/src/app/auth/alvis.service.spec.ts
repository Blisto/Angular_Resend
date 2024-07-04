import { TestBed } from '@angular/core/testing';

import { AlvisService } from './alvis.service';

describe('AlvisService', () => {
  let service: AlvisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlvisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
