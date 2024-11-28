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
    path: ROUTER_LINKS.SHOWCASE,
    loadChildren: () => import('./feature/showcase/showcase.module').then(m => m.ShowcaseModule),
  },
  {
    path: ROUTER_LINKS.AUTH,
    loadChildren: () => import('./feature/auth/auth.module').then(m => m.AuthModule),
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
