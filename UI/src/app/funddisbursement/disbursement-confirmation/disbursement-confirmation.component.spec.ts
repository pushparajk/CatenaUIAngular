import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisbursementConfirmationComponent } from './disbursement-confirmation.component';

describe('DisbursementConfirmationComponent', () => {
  let component: DisbursementConfirmationComponent;
  let fixture: ComponentFixture<DisbursementConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisbursementConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisbursementConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
