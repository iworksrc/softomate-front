import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', redirectTo: 'assets', pathMatch: 'full'},
      {
        path: 'assets',
        loadChildren: './modules/assets/assets.module#AssetsModule'
      }
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
