import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Allocatefund2Component } from './allocatefund2.component';

describe('Allocatefund2Component', () => {
  let component: Allocatefund2Component;
  let fixture: ComponentFixture<Allocatefund2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Allocatefund2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Allocatefund2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
