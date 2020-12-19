import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Createscheme2Component } from './createscheme2.component';

describe('Createscheme2Component', () => {
  let component: Createscheme2Component;
  let fixture: ComponentFixture<Createscheme2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Createscheme2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Createscheme2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
