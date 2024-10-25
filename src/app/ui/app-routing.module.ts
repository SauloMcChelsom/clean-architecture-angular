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
    path: ROUTER_LINKS.CHANGE_LANGUAGE,
    loadChildren: () => import('./feature/change-language/change-language.module').then(m => m.ChangeLanguageModule),
  },
  {
    path: 'show-case',
    loadChildren: () => import('./feature/show-case/show-case.module').then(m => m.ShowCaseModule),
  },
  {
    path: ROUTER_LINKS.SHOWCASE,
    loadChildren: () => import('./feature/showcase/showcase.module').then(m => m.ShowcaseModule),
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
