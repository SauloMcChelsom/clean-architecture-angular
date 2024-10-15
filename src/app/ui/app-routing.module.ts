import { NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes } from '@angular/router';
import { ROUTER_LINKS } from '../../config/endpoints/router-links';

const routes: Routes = [
  {
    path: ROUTER_LINKS.ROOT,
    loadChildren: () => import('./feature/note/note.module').then(m => m.NoteModule),  
  },
  {
    path: ROUTER_LINKS.NOTE,
    loadChildren: () => import('./feature/note/note.module').then(m => m.NoteModule),
  },
  {
    path: ROUTER_LINKS.FLEX_GRID,
    loadChildren: () => import('./feature/flex-grid/flex-grid.module').then(m => m.FlexGridModule),
  },
  {
    path: ROUTER_LINKS.PAGE_NOT_FOUND,
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
