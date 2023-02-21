import {Routes} from '@angular/router';
import {CardComponent} from '../card/card.component';
import {ListComponent} from './list.component';

export const ListRoutes: Routes = [
  {
    path: '', component: ListComponent,
  },
  {
    path: 'card/:id',
    component: CardComponent,
  },
];

