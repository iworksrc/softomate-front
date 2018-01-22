import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AssetsComponent } from './components/assets/assets.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { APIS } from './services/api/api';
import { AssetsRoutesModule } from './assets.routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AssetsRoutesModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [
    AssetsComponent,
    PersonListComponent,
    PersonEditComponent
  ],
  providers: [
    APIS
  ]
})
export class AssetsModule { }
