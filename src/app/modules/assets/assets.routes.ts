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
      {path: '', redirectTo: 'persons', pathMatch: 'full'},
      {
        path: 'persons',
        component: PersonListComponent
      },
      {
        path: 'persons/:operation',
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
