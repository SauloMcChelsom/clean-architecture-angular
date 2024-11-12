
import { CommonModule } from '@angular/common';
import { Component, Inject, Optional } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetModule } from '@angular/material/bottom-sheet';

@Component({
  selector: 'BottomSheet',
  template: `
    <div class="bottom-sheet-container">
      <ng-container *ngComponentOutlet="data.component"></ng-container>
    </div>
  `,
  styles: [`
    .bottom-sheet-container {
      padding: 16px;
    }
  `],
  standalone: true,
  imports: [CommonModule, MatBottomSheetModule]
})
export class BottomSheetComponent {
  constructor(
    @Optional() @Inject(MAT_BOTTOM_SHEET_DATA) public data: { component: any }
  ) { }
}





























































