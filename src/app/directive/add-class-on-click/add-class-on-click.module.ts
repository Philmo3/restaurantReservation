import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClassOnClickDirective } from './add-class-on-click.directive';

@NgModule({
  declarations: [AddClassOnClickDirective],
  imports: [CommonModule],
  exports: [AddClassOnClickDirective],
})
export class AddClassOnClickModule {}
