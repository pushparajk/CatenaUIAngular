import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayscreenComponent } from './overlayscreen.component';

describe('OverlayscreenComponent', () => {
  let component: OverlayscreenComponent;
  let fixture: ComponentFixture<OverlayscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
