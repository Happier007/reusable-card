import {Routes} from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: 'list',
    loadChildren: () => import('./main/list/list.routes').then((x) => x.ListRoutes),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: '**',
    redirectTo: 'list',
  },
];

