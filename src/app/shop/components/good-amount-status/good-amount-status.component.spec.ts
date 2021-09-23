import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodAmountStatusComponent } from './good-amount-status.component';

describe('GoodAmountStatusComponent', () => {
  let component: GoodAmountStatusComponent;
  let fixture: ComponentFixture<GoodAmountStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodAmountStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodAmountStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
