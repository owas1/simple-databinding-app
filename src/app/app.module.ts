import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleEventHandleComponent } from './simple-event-handle/simple-event-handle.component';
import { SimpleServerComponent } from './simple-server/simple-server.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleEventHandleComponent,
    SimpleServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
