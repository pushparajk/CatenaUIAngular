import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocatefundComponent } from './allocatefund.component';

describe('AllocatefundComponent', () => {
  let component: AllocatefundComponent;
  let fixture: ComponentFixture<AllocatefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocatefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocatefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
