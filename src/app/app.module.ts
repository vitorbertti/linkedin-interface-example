import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LeftColumnModule } from './left-column/left-column.module';
import { MiddleColumnModule } from './middle-column/middle-column.module';
import { RightColumnModule } from './right-column/right-column.module';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { DesktopHeaderComponent } from './desktop-header/desktop-header.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent, MobileHeaderComponent, DesktopHeaderComponent],
  imports: [
    BrowserModule,
    LeftColumnModule,
    MiddleColumnModule,
    RightColumnModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
