import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LeftColumnModule } from './left-column/left-column.module';
import { MiddleColumnModule } from './middle-column/middle-column.module';
import { MiddleColumnComponent } from './middle-column/middle-column.component';
import { RightColumnComponent } from './right-column/right-column.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent, RightColumnComponent],
  imports: [BrowserModule, LeftColumnModule, MiddleColumnModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
