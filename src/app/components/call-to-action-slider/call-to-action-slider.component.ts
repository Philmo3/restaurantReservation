import { Component, Input, OnInit } from '@angular/core';
import { CallToAction } from 'src/app/types/calltoaction.mock';

@Component({
  selector: 'app-call-to-action-slider',
  templateUrl: './call-to-action-slider.component.html',
  styleUrls: ['./call-to-action-slider.component.scss'],
})
export class CallToActionSliderComponent implements OnInit {

  @Input() callToActions: CallToAction[] = [];

  constructor() { }

  ngOnInit() {}

}
