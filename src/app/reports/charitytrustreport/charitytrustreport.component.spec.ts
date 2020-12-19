import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharitytrustreportComponent } from './charitytrustreport.component';

describe('CharitytrustreportComponent', () => {
  let component: CharitytrustreportComponent;
  let fixture: ComponentFixture<CharitytrustreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharitytrustreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharitytrustreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
