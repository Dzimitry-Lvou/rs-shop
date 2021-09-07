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

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InfoBlockComponent,
    NavigationBlockComponent,
    SearchFieldComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    MatButtonModule,
    StoreModule.forFeature('categories', categoriesReducer),
    EffectsModule.forFeature([CategoryEffects]),
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
