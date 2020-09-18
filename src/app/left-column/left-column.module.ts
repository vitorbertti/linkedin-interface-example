import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePanelComponent } from './profile-panel/profile-panel.component';
import { LeftColumnComponent } from './left-column.component';
import { HashtagPanelComponent } from './hashtag-panel/hashtag-panel.component';

@NgModule({
  declarations: [
    ProfilePanelComponent,
    LeftColumnComponent,
    HashtagPanelComponent,
  ],
  imports: [CommonModule],
  exports: [LeftColumnComponent, LeftColumnComponent],
})
export class LeftColumnModule {}
