import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './modules/core/core.module';
import { CoreComponent } from './modules/core/components/core/core.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

import {
  CovalentLayoutModule,
  CovalentStepsModule
} from '@covalent/core';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(routes, {enableTracing: true}),

    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [CoreComponent]
})
export class AppModule { }
