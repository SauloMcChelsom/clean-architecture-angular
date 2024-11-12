import { Injectable, Type } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openDialog<T, D>(component: Type<T>, data: D): Observable<any> {
    const dialogRef = this.dialog.open(component, {
      data,
    });
    return dialogRef.afterClosed();
  }
}
