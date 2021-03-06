import { Component, Input, OnInit } from '@angular/core';
import { CallToAction } from 'src/app/types/calltoaction.mock';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss'],
})
export class CallToActionComponent implements OnInit {

  @Input() callToAction: CallToAction;

  constructor() { }

  ngOnInit() {}

}
