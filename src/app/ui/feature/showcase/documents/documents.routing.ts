import { RouterModule, Routes } from '@angular/router';
import { DocumentsComponent } from './documents.component';
import { ROUTER_LINKS } from 'src/config/endpoints/router-links';

const routes: Routes = [
  {
    path: ROUTER_LINKS.ROOT,
    component: DocumentsComponent, 
    data: { title: 'Bottom sheet' }
  },
];

export const ShowcaseDocumentRoutes = RouterModule.forChild(routes);
