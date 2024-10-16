import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTER_LINKS } from 'src/config/endpoints/router-links';
import { ChangeLanguageComponent } from './pages/change-language.component';

export const ROUTES: Routes = [
  {
    path: ROUTER_LINKS.ROOT,
    component: ChangeLanguageComponent,
  }
]

export const ChangeLanguageRoutes = RouterModule.forChild(ROUTES);
