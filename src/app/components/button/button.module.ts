import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { IonicModule } from '@ionic/angular';
import { ButtonRippleDirective } from './button-ripple.directive';

@NgModule({
  declarations: [ButtonComponent, ButtonRippleDirective],
  imports: [CommonModule, IonicModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
