import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const openClose = trigger('openClose', [
  state(
    'open',
    style({
      left: '20%',
      backgroundColor: 'white',
    })
  ),
  state(
    'closed',
    style({
      left: '100%',
      backgroundColor: 'white'
    })
  ),
  transition('open => closed', [animate('1s')]),
  transition('closed => open', [animate('0.5s')]),
]);
