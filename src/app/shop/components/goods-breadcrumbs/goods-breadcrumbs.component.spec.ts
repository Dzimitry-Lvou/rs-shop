import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsBreadcrumbsComponent } from './goods-breadcrumbs.component';

describe('GoodsBreadcrumbsComponent', () => {
  let component: GoodsBreadcrumbsComponent;
  let fixture: ComponentFixture<GoodsBreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsBreadcrumbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
