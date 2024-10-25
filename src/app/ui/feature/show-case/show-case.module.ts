import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCaseComponent } from './show-case.component';
import { ShowCaseRoutes } from './show-case.routing';

@NgModule({
  imports: [
    CommonModule,
    ShowCaseRoutes,
    ShowCaseComponent,
  ],
  declarations: []
})
export class ShowCaseModule { }
