import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendingPanelComponent } from './trending-panel/trending-panel.component';
import { RightColumnComponent } from './right-column.component';

@NgModule({
  declarations: [RightColumnComponent, TrendingPanelComponent],
  imports: [CommonModule],
  exports: [RightColumnComponent],
})
export class RightColumnModule {}
