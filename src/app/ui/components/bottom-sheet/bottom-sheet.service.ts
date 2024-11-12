import { Injectable, Type } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from './bottom-sheet.component';

@Injectable({ providedIn: 'root' })
export class BottomSheetService {
  constructor(private bottomSheet: MatBottomSheet) { }

  openBottomSheet(component: Type<any>) {
    this.bottomSheet.open(BottomSheetComponent, {
      data: { component }
    });
  }
}
