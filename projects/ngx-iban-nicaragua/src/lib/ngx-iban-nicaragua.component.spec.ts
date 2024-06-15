import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIbanNicaraguaComponent } from './ngx-iban-nicaragua.component';

describe('NgxIbanNicaraguaComponent', () => {
  let component: NgxIbanNicaraguaComponent;
  let fixture: ComponentFixture<NgxIbanNicaraguaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxIbanNicaraguaComponent]
    });
    fixture = TestBed.createComponent(NgxIbanNicaraguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
