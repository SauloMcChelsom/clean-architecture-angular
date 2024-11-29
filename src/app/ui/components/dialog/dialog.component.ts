import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'DialogModal',
  template: '',
  standalone: true,
  imports:[
    CommonModule
  ]
})
export class DialogModalComponent {
  constructor(
    private dialogRef: MatDialogRef<DialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close(data?: any): void {
    this.dialogRef.close(data);
  }
}