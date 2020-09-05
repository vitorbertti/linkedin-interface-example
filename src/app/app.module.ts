import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LeftColumnComponent } from './left-column/left-column.component';
import { MiddleColumnComponent } from './middle-column/middle-column.component';
import { RightColumnComponent } from './right-column/right-column.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LeftColumnComponent,
    MiddleColumnComponent,
    RightColumnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
