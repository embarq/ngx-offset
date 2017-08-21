import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OffsetModule } from './offset/offset.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OffsetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
