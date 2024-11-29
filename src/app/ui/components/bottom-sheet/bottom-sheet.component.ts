
import { CommonModule } from '@angular/common';
import { Component, Inject, Optional } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetModule } from '@angular/material/bottom-sheet';

@Component({
  selector: 'BottomSheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
  standalone: true,
  imports: [CommonModule, MatBottomSheetModule]
})
export class BottomSheetComponent {
  constructor(
    @Optional() @Inject(MAT_BOTTOM_SHEET_DATA) public data: { component: any }
  ) { }
}





























































