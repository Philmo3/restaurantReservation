import { Component } from '@angular/core';
import { callToActionsMock } from 'src/app/mocks/callToAction.mock';
import { restaurantMock } from 'src/app/mocks/restaurant.mock';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  restaurants = restaurantMock;

  callToActions = callToActionsMock;

  constructor() {}
}
