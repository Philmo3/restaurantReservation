/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-slider',
  templateUrl: './restaurant-slider.component.html',
  styleUrls: ['./restaurant-slider.component.scss'],
})
export class RestaurantSliderComponent implements OnInit {
  @Input() title: string = 'Some Categorie';

  constructor() {}

  ngOnInit() {}
}
