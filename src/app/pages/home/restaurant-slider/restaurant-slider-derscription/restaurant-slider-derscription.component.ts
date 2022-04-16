import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/types/restaurant';

@Component({
  selector: 'app-restaurant-slider-derscription',
  templateUrl: './restaurant-slider-derscription.component.html',
  styleUrls: ['./restaurant-slider-derscription.component.scss'],
})
export class RestaurantSliderDerscriptionComponent implements OnInit {
  @Input() restaurant: Restaurant;

  constructor() {}

  ngOnInit() {}
}
