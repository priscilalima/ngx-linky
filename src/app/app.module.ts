import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LinkyModule } from 'ngx-linky';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LinkyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
