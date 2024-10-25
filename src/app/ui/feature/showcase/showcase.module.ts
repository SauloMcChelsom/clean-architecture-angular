import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseComponent } from './showcase.component';
import { ShowcaseRoutes } from './showcase.routing';

@NgModule({
  imports: [
    CommonModule,
    ShowcaseRoutes,
    ShowcaseComponent
  ]
})
export class ShowcaseModule { }
