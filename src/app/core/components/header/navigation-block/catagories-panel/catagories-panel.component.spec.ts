import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoriesPanelComponent } from './catagories-panel.component';

describe('CatagoriesPanelComponent', () => {
  let component: CatagoriesPanelComponent;
  let fixture: ComponentFixture<CatagoriesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatagoriesPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoriesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
