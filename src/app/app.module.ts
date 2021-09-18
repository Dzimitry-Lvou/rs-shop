import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CategoryEffects } from './redux/effects/category.effects';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/ru-BY';

registerLocaleData(locale, 'BYN');
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    NoopAnimationsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([CategoryEffects]),
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'BYN',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
