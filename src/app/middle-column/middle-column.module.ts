import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiddleColumnComponent } from './middle-column.component';
import { FeedPostComponent } from './feed-post/feed-post.component';

@NgModule({
  declarations: [MiddleColumnComponent, FeedPostComponent],
  imports: [CommonModule],
  exports: [MiddleColumnComponent],
})
export class MiddleColumnModule {}
