import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePanelComponent } from './profile-panel/profile-panel.component';
import { LeftColumnComponent } from './left-column.component';

@NgModule({
  declarations: [ProfilePanelComponent, LeftColumnComponent],
  imports: [CommonModule],
  exports: [LeftColumnComponent],
})
export class LeftColumnModule {}
