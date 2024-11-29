import { NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes } from '@angular/router';
import { ROUTING } from '../../config/endpoints/router-links';

const routes: Routes = [
  {
    path: ROUTING.ROOT,
    loadChildren: () => import('./feature/note/note.module').then(m => m.NoteModule),  
  },
  {
    path: ROUTING.NOTE,
    loadChildren: () => import('./feature/note/note.module').then(m => m.NoteModule),
  },
  {
    path: ROUTING.SHOWCASE,
    loadChildren: () => import('./feature/showcase/showcase.module').then(m => m.ShowcaseModule),
  },
  {
    path: ROUTING.AUTH,
    loadChildren: () => import('./feature/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: ROUTING.PAGE_NOT_FOUND,
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
