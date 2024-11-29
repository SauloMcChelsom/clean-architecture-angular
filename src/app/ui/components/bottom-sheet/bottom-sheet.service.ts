import { Injectable, inject, Type } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Injectable({ providedIn: 'root' })
export class BottomSheetService {
  private bottomSheet = inject(MatBottomSheet);

  openBottomSheet<T>(component: Type<T>, data?: any): MatBottomSheetRef<T> {
    return this.bottomSheet.open(component, {
      data: data
    });
  }
}
