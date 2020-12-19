import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunddisbursementComponent } from './funddisbursement.component';

describe('FunddisbursementComponent', () => {
  let component: FunddisbursementComponent;
  let fixture: ComponentFixture<FunddisbursementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunddisbursementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunddisbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
