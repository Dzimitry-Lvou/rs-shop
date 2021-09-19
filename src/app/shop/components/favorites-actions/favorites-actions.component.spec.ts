import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesActionsComponent } from './favorites-actions.component';

describe('FavoritesActionsComponent', () => {
  let component: FavoritesActionsComponent;
  let fixture: ComponentFixture<FavoritesActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
