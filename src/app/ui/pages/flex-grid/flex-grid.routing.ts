import { Routes, RouterModule } from '@angular/router';
import { FlexGridComponent } from './flex-grid.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: FlexGridComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteRouteModule { }
