import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiddleColumnComponent } from './middle-column.component';
import { FeedPostComponent } from './feed-post/feed-post.component';
import { FeedShareComponent } from './feed-share/feed-share.component';

@NgModule({
  declarations: [MiddleColumnComponent, FeedPostComponent, FeedShareComponent],
  imports: [CommonModule],
  exports: [MiddleColumnComponent],
})
export class MiddleColumnModule {}
