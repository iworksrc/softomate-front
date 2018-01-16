import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsComponent } from './components/assets/assets.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { AssetsRoutesModule } from './assets.routes';

@NgModule({
  imports: [
    CommonModule,
    AssetsRoutesModule
  ],
  declarations: [
    AssetsComponent,
    PersonListComponent,
    PersonEditComponent
  ]
})
export class AssetsModule { }
