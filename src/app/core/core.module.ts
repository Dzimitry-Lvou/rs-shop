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
import { CategoryEffects } from '../redux/effects/category.effects';
import { EffectsModule } from '@ngrx/effects';
import { CategoryListComponent } from './components/header/navigation-block/category-list/category-list.component';
import { CoreRoutingModule } from './core-routing.module';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LogoComponent } from './components/header/navigation-block/logo/logo.component';
import { ContactsBlockComponent } from './components/header/info-block/contacts-block/contacts-block.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { UserToolsComponent } from './components/header/navigation-block/user-tools/user-tools.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginDialogComponent } from './components/header/navigation-block/login-dialog/login-dialog.component';
import { RegistrationDialogComponent } from './components/header/navigation-block/registration-dialog/registration-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { reducer } from '../redux/reducers/card.reducer';
import { UpdateUserEffects } from '../redux/effects/user.effects';
import { LogoutEffects } from '../redux/effects/logout.effects';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InfoBlockComponent,
    NavigationBlockComponent,
    SearchFieldComponent,
    CategoryListComponent,
    NotFoundPageComponent,
    LogoComponent,
    ContactsBlockComponent,
    UserToolsComponent,
    LoginDialogComponent,
    RegistrationDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    MatButtonModule,
    StoreModule.forFeature('categories', reducer),
    StoreModule.forFeature('user', reducer),
    EffectsModule.forFeature([CategoryEffects, UpdateUserEffects, LogoutEffects]),
    CoreRoutingModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
