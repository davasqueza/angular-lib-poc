import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLibPocComponent } from './angular-lib-poc.component';

describe('AngularLibPocComponent', () => {
  let component: AngularLibPocComponent;
  let fixture: ComponentFixture<AngularLibPocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularLibPocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLibPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
