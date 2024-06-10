import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NoteComponent } from './note.component'
import { AddNoteComponent } from './add-note/add-note.component'
import { ReadOneNoteComponent } from './read-one-note/read-one-note.component'
import { UpdateNoteComponent } from './update-note/update-note.component'

export const ROUTES: Routes = [
    {
        path: '',
        component: NoteComponent,
    },
    {
        path: 'add',
        component: AddNoteComponent,
    },
    {
        path: 'update/:title',
        component: UpdateNoteComponent,
    },
    {
        path: 'read/:title',
        component: ReadOneNoteComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class NoteRouteModule { }