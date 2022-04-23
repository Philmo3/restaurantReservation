import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullMenuComponent } from './full-menu.component';
import { MenuLinkComponent } from './menu-link/menu-link.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [FullMenuComponent, MenuLinkComponent],
  imports: [CommonModule, IonicModule],
  exports: [FullMenuComponent],
})
export class FullMenuModule {}
