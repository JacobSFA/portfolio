import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDCSSOnlyComponent } from './three-dcssonly.component';

describe('ThreeDCSSOnlyComponent', () => {
  let component: ThreeDCSSOnlyComponent;
  let fixture: ComponentFixture<ThreeDCSSOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDCSSOnlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDCSSOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
