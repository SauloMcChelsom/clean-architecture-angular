import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PageNoteComponent } from './note.component'
import { PageNoteAddComponent } from './add/add.component'
import { PageNoteReadOneComponent } from './read-one/read-one.component'
import { PageNoteUpdateComponent } from './update/update.component'

export const ROUTES: Routes = [
    {
        path: '',
        component: PageNoteComponent,
    },
    {
        path: 'add',
        component: PageNoteAddComponent,
    },
    {
        path: 'update/:title',
        component: PageNoteUpdateComponent,
    },
    {
        path: 'read/:title',
        component: PageNoteReadOneComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class NoteRouteModule { }