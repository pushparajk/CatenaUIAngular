import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MloverlayComponent } from './mloverlay.component';

describe('MloverlayComponent', () => {
  let component: MloverlayComponent;
  let fixture: ComponentFixture<MloverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MloverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MloverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
