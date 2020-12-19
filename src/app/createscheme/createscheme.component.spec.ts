import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateschemeComponent } from './createscheme.component';

describe('CreateschemeComponent', () => {
  let component: CreateschemeComponent;
  let fixture: ComponentFixture<CreateschemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateschemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateschemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
