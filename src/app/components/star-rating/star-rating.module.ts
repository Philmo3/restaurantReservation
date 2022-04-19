import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating.component';
import { NumberToArrayModule } from 'src/app/pipes/number-to-array/number-to-array.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [StarRatingComponent],
  imports: [CommonModule, NumberToArrayModule, IonicModule],
  exports: [StarRatingComponent],
})
export class StarRatingModule {}
