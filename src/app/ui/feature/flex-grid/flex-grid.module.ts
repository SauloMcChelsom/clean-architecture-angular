import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexGridComponent } from './flex-grid.component';
import { NoteRouteModule } from './flex-grid.routing';

@NgModule({
  imports: [
    CommonModule,
    NoteRouteModule
  ],
  declarations: [FlexGridComponent]
})
export class FlexGridModule { }
