import {animate, query, state, style, transition, trigger} from '@angular/animations';

export const showHideAnimation = trigger('showHideBlock', [
  // state('false', style({height: '0', overflow: 'hidden'})),
  state('false', style({height: '*', overflow: 'hidden'})),
  transition('* => false', query('.test1', [animate(150), style({height: '0', overflow: 'hidden'})], {optional: true})),
  transition('* => true', query('.test1', [animate(150), style({height: '*', overflow: 'hidden'})], {optional: true})),
]);
