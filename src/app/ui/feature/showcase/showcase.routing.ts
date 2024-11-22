import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './pages/showcase.component';
import { ROUTER_LINKS } from 'src/config/endpoints/router-links';

const route: Routes = [
  {
    path: ROUTER_LINKS.ROOT,
    component: ShowcaseComponent,
    data: { title: 'Showcase' },
    children: [
      {
        path: ROUTER_LINKS.ROOT,
        loadChildren: () => import('./components/components.module').then(m => m.ComponentModule) 
      }
    ]
  }
];

export const ShowcaseRoutes = RouterModule.forChild(route);
