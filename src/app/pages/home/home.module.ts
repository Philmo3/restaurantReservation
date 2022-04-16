import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { RestaurantSliderComponent } from './restaurant-slider/restaurant-slider.component';
// eslint-disable-next-line max-len
import { RestaurantSliderDerscriptionComponent } from './restaurant-slider/restaurant-slider-derscription/restaurant-slider-derscription.component';
import { SliderModule } from 'src/app/components/slider/slider.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SliderModule,
  ],
  declarations: [
    HomePage,
    RestaurantSliderComponent,
    RestaurantSliderDerscriptionComponent,
  ],
})
export class HomePageModule {}
