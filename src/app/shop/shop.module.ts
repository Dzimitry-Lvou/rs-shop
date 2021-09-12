import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { ShopRoutingModule } from './shop-routing.module';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { GoodsCardComponent } from './components/goods-card/goods-card.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ProductPageComponent,
    CategoryPageComponent,
    BreadcrumbsComponent,
    GoodsCardComponent,
  ],
  imports: [CommonModule, ShopRoutingModule, MatButtonModule, MatCardModule],
})
export class ShopModule {}
