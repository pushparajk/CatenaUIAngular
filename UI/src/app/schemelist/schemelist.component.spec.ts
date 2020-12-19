import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemelistComponent } from './schemelist.component';

describe('SchemelistComponent', () => {
  let component: SchemelistComponent;
  let fixture: ComponentFixture<SchemelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
