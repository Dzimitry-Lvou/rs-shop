import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { InfoBlockComponent } from './components/header/info-block/info-block.component';
import { NavigationBlockComponent } from './components/header/navigation-block/navigation-block.component';
import { SearchFieldComponent } from './components/header/navigation-block/search-field/search-field.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { categoriesReducer } from '../redux/reducers/card.reducer';
import { CategoryEffects } from '../redux/effects/category.effects';
import { EffectsModule } from '@ngrx/effects';
import { CategoryListComponent } from './components/header/navigation-block/category-list/category-list.component';
import { CoreRoutingModule } from './core-routing.module';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InfoBlockComponent,
    NavigationBlockComponent,
    SearchFieldComponent,
    CategoryListComponent,
    NotFoundPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    MatButtonModule,
    StoreModule.forFeature('categories', categoriesReducer),
    EffectsModule.forFeature([CategoryEffects]),
    CoreRoutingModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
