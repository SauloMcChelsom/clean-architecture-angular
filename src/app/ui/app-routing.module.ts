import { NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./feature/note/note.module').then(m => m.NoteModule),  
  },
  {
    path: 'note',
    loadChildren: () => import('./feature/note/note.module').then(m => m.NoteModule),
  },
  {
    path: 'flex-grid',
    loadChildren: () => import('./feature/flex-grid/flex-grid.module').then(m => m.FlexGridModule),
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: NoPreloading,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
