import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotSnackBarComponent } from './snack-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HotSnackBarComponent],
  exports:[HotSnackBarComponent]
})
export class HotSnackBarModule { }
