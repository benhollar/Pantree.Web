import { TestBed } from '@angular/core/testing';

import { BaseCollectionService } from './base-collection.service';

describe('BaseCollectionService', () => {
  let service: BaseCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
