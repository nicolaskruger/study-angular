import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentCliComponent } from './component-cli/component-cli.component';
import { ManualComponent } from './manual/manual.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentCliComponent,
    ManualComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
