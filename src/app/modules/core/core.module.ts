import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './components/core/core.component';
import { RouterModule } from '@angular/router';

import { CovalentLayoutModule } from '@covalent/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CovalentLayoutModule
  ],
  declarations: [
    CoreComponent
  ]
})
export class CoreModule { }
