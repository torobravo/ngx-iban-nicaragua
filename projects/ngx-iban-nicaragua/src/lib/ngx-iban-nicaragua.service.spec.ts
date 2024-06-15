import { TestBed } from '@angular/core/testing';

import { NgxIbanNicaraguaService } from './ngx-iban-nicaragua.service';

describe('NgxIbanNicaraguaService', () => {
  let service: NgxIbanNicaraguaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxIbanNicaraguaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
