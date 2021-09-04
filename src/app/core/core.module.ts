import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InfoBlockComponent } from './header/info-block/info-block.component';
import { NavigationBlockComponent } from './header/navigation-block/navigation-block.component';
import { SearchFieldComponent } from './header/navigation-block/search-field/search-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InfoBlockComponent,
    NavigationBlockComponent,
    SearchFieldComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
