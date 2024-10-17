import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NoteComponent } from './pages/note.component'
import { PageAddComponent } from './pages/add/add.component'
import { PageReadOneComponent } from './pages/read-one/read-one.component'
import { PageUpdateComponent } from './pages/update/update.component'
import { ROUTER_LINKS } from '../../../../config/endpoints/router-links'

export const ROUTES: Routes = [
    {
        path: ROUTER_LINKS.ROOT,
        component: NoteComponent,
        data: { title: 'NOTE.HOME' }
    },
    {
        path: ROUTER_LINKS.NOTE_ADD,
        component: PageAddComponent,
        data: { title: 'NOTE.PAGE_ADD' }
    },
    {
        path: ROUTER_LINKS.NOTE_UPDATE_BY_TITLE,
        component: PageUpdateComponent,
        data: { title: 'NOTE.PAGE_UPDATE' }
    },
    {
        path: ROUTER_LINKS.NOTE_READ_BY_TITLE,
        component: PageReadOneComponent,
        data: { title: 'NOTE.PAGE_READ_ONE' }
    }
]

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class NoteRouteModule { }