import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [MainPageComponent, ProductPageComponent, CategoryPageComponent],
  imports: [CommonModule, ShopRoutingModule],
})
export class ShopModule {}
