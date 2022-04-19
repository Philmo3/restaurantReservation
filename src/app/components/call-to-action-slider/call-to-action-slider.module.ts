import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallToActionSliderComponent } from './call-to-action-slider.component';
import { SliderModule } from '../slider/slider.module';
import { CallToActionModule } from '../call-to-action/call-to-action.module';



@NgModule({
  declarations: [CallToActionSliderComponent],
  imports: [
    CommonModule,
    SliderModule,
    CallToActionModule
  ],
  exports: [
    CallToActionSliderComponent
  ]
})
export class CallToActionSliderModule { }
