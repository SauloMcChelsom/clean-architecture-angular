import { NgModule } from '@angular/core';

import { SelectorMultipleComponent } from './selector-multiple.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule, 
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
  ],
  declarations: [SelectorMultipleComponent],
  exports: [SelectorMultipleComponent],
})
export class SelectorMultipleModule {}
