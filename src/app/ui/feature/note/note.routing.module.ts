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
    },
    {
        path: ROUTER_LINKS.NOTE_ADD,
        component: PageAddComponent,
    },
    {
        path: ROUTER_LINKS.NOTE_UPDATE_BY_TITLE,
        component: PageUpdateComponent,
    },
    {
        path: ROUTER_LINKS.NOTE_READ_BY_TITLE,
        component: PageReadOneComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class NoteRouteModule { }