import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoteRouteModule } from './note.routing.module';

@NgModule({
  imports: [
    CommonModule,
    NoteRouteModule
  ],
})
export class NoteModule { }
