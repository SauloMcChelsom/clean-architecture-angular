import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NoteComponent } from './pages/note.component'
import { PageAddComponent } from './pages/add/add.component'
import { PageReadOneComponent } from './pages/read-one/read-one.component'
import { PageUpdateComponent } from './pages/update/update.component'

export const ROUTES: Routes = [
    {
        path: '',
        component: NoteComponent,
    },
    {
        path: 'add',
        component: PageAddComponent,
    },
    {
        path: 'update/:title',
        component: PageUpdateComponent,
    },
    {
        path: 'read/:title',
        component: PageReadOneComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class NoteRouteModule { }