import {animate, query, state, style, transition, trigger} from '@angular/animations';

export const rotateAnimation = trigger('rotatedState', [
  transition('true => false',
    [query('.active', [style({transform: 'scaleY(1)'}), animate(150)], {optional: true})]),
  transition('false => true',
    [query('.active', [style({transform: 'scaleY(-1)'}), animate(150)], {optional: true})]),
]);
