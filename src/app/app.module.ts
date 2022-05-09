import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentCliComponent } from './component-cli/component-cli.component';
import { ManualComponent } from './manual/manual.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { FormsModule, NgSelectOption } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComponentCliComponent,
    ManualComponent,
    InterpolationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
