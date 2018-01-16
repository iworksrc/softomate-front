import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetsComponent } from './components/assets/assets.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AssetsComponent,
    children: [
      {path: '', redirectTo: 'personlist', pathMatch: 'full'},
      {
        path: 'personlist',
        component: PersonListComponent
      },
      {
        path: 'personlist/:operation',
        component: PersonEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutesModule {}
