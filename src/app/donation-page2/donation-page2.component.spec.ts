import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationPage2Component } from './donation-page2.component';

describe('DonationPage2Component', () => {
  let component: DonationPage2Component;
  let fixture: ComponentFixture<DonationPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
