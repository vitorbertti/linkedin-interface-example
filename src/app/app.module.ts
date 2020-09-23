import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LeftColumnModule } from './left-column/left-column.module';
import { MiddleColumnModule } from './middle-column/middle-column.module';
import { RightColumnModule } from './right-column/right-column.module';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { DesktopHeaderComponent } from './desktop-header/desktop-header.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { LoadingProfilePanelComponent } from './shimmer/loading-profile-panel/loading-profile-panel.component';
import { LoadingFeedPostComponent } from './shimmer/loading-feed-post/loading-feed-post.component';
import { LoadingFeedShareComponent } from './shimmer/loading-feed-share/loading-feed-share.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent, MobileHeaderComponent, DesktopHeaderComponent, AdBannerComponent, LoadingProfilePanelComponent, LoadingFeedPostComponent, LoadingFeedShareComponent],
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
