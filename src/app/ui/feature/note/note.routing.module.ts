import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NoteComponent } from './pages/note.component'
import { PageAddComponent } from './pages/add/add.component'
import { PageReadOneComponent } from './pages/read-one/read-one.component'
import { PageUpdateComponent } from './pages/update/update.component'
import { ROUTING } from '../../../../config/endpoints/router-links'
import { SearchComponent } from './pages/search/search.component'

export const ROUTES: Routes = [
    {
        path: ROUTING.ROOT,
        component: NoteComponent,
        data: { title: 'NOTE.HOME' }
    },
    {
        path: ROUTING.NOTE_ADD,
        component: PageAddComponent,
        data: { title: 'NOTE.PAGE_ADD' }
    },
    {
        path: ROUTING.NOTE_UPDATE_BY_TITLE,
        component: PageUpdateComponent,
        data: { title: 'NOTE.PAGE_UPDATE' }
    },
    {
        path: ROUTING.NOTE_READ_BY_TITLE,
        component: PageReadOneComponent,
        data: { title: 'NOTE.PAGE_READ_ONE' }
    },
    {
        path: ROUTING.NOTE_SEARCH,
        component: SearchComponent,
        data: { title: 'NOTE.HOME' }
    },
]

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class NoteRouteModule { }