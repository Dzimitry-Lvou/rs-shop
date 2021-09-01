import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InfoBlockComponent } from './header/info-block/info-block.component';
import { NavigationBlockComponent } from './header/navigation-block/navigation-block.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, InfoBlockComponent, NavigationBlockComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
