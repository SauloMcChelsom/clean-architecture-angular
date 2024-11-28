import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './pages/showcase.component';
import { ROUTING } from 'src/config/endpoints/router-links';

const route: Routes = [
  {
    path: ROUTING.ROOT,
    component: ShowcaseComponent,
    data: { title: 'Showcase' },
    children: [
      {
        path: ROUTING.ROOT,
        loadChildren: () => import('./components/components.module').then(m => m.ComponentModule) 
      }
    ]
  }
];

export const ShowcaseRoutes = RouterModule.forChild(route);
