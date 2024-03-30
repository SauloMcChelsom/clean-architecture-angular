import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NotesComponent } from './pages/notes.component'
import { AddNotesComponent } from './pages/add-notes/add-notes.component'
import { ReadOneNotesComponent } from './pages/read-one-notes/read-one-notes.component'
import { UpdateNotesComponent } from './pages/update-notes/update-notes.component'

export const ROUTES: Routes = [
    {
        path: '',
        component: NotesComponent,
    },
    {
        path: 'add',
        component: AddNotesComponent,
    },
    {
        path: 'update/:title',
        component: UpdateNotesComponent,
    },
    {
        path: 'read/:title',
        component: ReadOneNotesComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class NotesRouteModule { }