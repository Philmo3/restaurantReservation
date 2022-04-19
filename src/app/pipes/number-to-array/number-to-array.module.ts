import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberToArrayPipe } from './number-to-array.pipe';

@NgModule({
  declarations: [NumberToArrayPipe],
  imports: [CommonModule],
  exports: [NumberToArrayPipe],
})
export class NumberToArrayModule {}
