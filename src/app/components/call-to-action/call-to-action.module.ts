import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallToActionComponent } from './call-to-action.component';
import { IonicModule } from '@ionic/angular';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [CallToActionComponent],
  imports: [CommonModule, IonicModule, ButtonModule],
  exports: [CallToActionComponent],
})
export class CallToActionModule {}
