import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './showcase.component';
import { ROUTER_LINKS } from 'src/config/endpoints/router-links';
import { HomeComponent } from './home/home.component';

const route: Routes = [
  {
    path: ROUTER_LINKS.ROOT,
    component: ShowcaseComponent,
    data: { title: 'Home' },
    children: [
      {
        path: ROUTER_LINKS.ROOT,
        component: HomeComponent, 
        data: { title: 'Home' }
      },
      { 
        path: 'components', 
        loadChildren: () => import('./components/components.module').then(m => m.ComponentModule) 
      },
      { 
        path: 'documents',  
        loadChildren: () => import('./documents/documents.module').then(m => m.DocumentModule) 
      }
    ]
  }
];

export const ShowcaseRoutes = RouterModule.forChild(route);
