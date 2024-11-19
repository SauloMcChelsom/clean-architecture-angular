import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  standalone: true,
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule
  ]
})
export class PageComponent {
  constructor(
    private dialogRef: MatDialogRef<PageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string; animal: string }
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(){
    console.log('ngOnInit')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
  }
}