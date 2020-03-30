import { TestBed } from '@angular/core/testing';

import { AngularLibPocService } from './angular-lib-poc.service';

describe('AngularLibPocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularLibPocService = TestBed.get(AngularLibPocService);
    expect(service).toBeTruthy();
  });
});
