import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularsItemComponent } from './populars-item.component';

describe('PopularsItemComponent', () => {
  let component: PopularsItemComponent;
  let fixture: ComponentFixture<PopularsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
