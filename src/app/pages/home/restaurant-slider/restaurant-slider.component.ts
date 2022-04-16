/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/types/restaurant';

@Component({
  selector: 'app-restaurant-slider',
  templateUrl: './restaurant-slider.component.html',
  styleUrls: ['./restaurant-slider.component.scss'],
})
export class RestaurantSliderComponent implements OnInit {
  @Input() title: string = 'Some Categorie';

  @Input() restaurants: Restaurant[] = [];

  constructor() {}

  ngOnInit() {}
}
