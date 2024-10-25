import { Routes, RouterModule } from '@angular/router';
import { ROUTER_LINKS } from 'src/config/endpoints/router-links';
import { ShowcaseComponent } from './showcase.component';

const routes: Routes = [
  {
    path: ROUTER_LINKS.ROOT,
    component: ShowcaseComponent,
    data: { title: 'NOTE.HOME' }
  },
];

export const ShowcaseRoutes = RouterModule.forChild(routes);
