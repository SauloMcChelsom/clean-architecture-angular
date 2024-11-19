import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShowcaseComponentRoutes } from './components.routing';

@NgModule({
  imports: [
    CommonModule,
    ShowcaseComponentRoutes
  ],
})
export class ComponentModule { }
