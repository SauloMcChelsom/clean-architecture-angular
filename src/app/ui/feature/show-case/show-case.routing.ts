import { Routes, RouterModule } from '@angular/router';
import { ROUTER_LINKS } from 'src/config/endpoints/router-links';
import { ShowCaseComponent } from './show-case.component';

const routes: Routes = [
  {
    path: ROUTER_LINKS.ROOT,
    component: ShowCaseComponent,
    data: { title: 'NOTE.HOME' }
  },
];

export const ShowCaseRoutes = RouterModule.forChild(routes);
