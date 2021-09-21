import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountsCarouselComponent } from './discounts-carousel.component';

describe('DiscountsCarouselComponent', () => {
  let component: DiscountsCarouselComponent;
  let fixture: ComponentFixture<DiscountsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountsCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
