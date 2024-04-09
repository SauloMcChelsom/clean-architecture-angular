import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HotInputComponent } from '../../components/input/input.component';
import { HotSnackBarModule } from '../../components/snack-bar/snack-bar.module';
import { HotTextareaComponent } from '../../components/textarea/textarea.component';
import { AngularMaterialModule } from '../../theme/angular-material.module';
import { CardComponent } from './components/card/card.component';
import { NavBarAddComponent } from './components/nav-bar-add/nav-bar-add.component';
import { NavBarReadComponent } from './components/nav-bar-read/nav-bar-read.component';
import { NavBarUpdateComponent } from './components/nav-bar-update/nav-bar-update.component';
import { NotesRouteModule } from './notes.routing.module';
import { AddNotesComponent } from './pages/add-notes/add-notes.component';
import { ListNotesAllComponent } from './pages/list-notes-all/list-notes-all.component';
import { NotesComponent } from './pages/notes.component';
import { ReadOneNotesComponent } from './pages/read-one-notes/read-one-notes.component';
import { UpdateNotesComponent } from './pages/update-notes/update-notes.component';
import { ViewNotesComponent } from './pages/view-notes/view-notes.component';

@NgModule({
  declarations: [
    NotesComponent,
    ListNotesAllComponent,
    UpdateNotesComponent,
    AddNotesComponent,
    ViewNotesComponent,
    CardComponent,
    NavBarUpdateComponent,
    NavBarAddComponent,
    ReadOneNotesComponent,
    NavBarReadComponent
  ],
  imports: [
    CommonModule,
    NotesRouteModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HotInputComponent,
    HotTextareaComponent,
    HotSnackBarModule
  ]
})
export class NotesModule { }
