import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularsSliderComponent } from './populars-slider.component';

describe('PopularsSliderComponent', () => {
  let component: PopularsSliderComponent;
  let fixture: ComponentFixture<PopularsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularsSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
