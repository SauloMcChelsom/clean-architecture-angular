import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HotInputComponent } from '../../components/less/input/input.component';
import { HotSnackBarModule } from '../../components/less/snack-bar/snack-bar.module';
import { HotTextareaComponent } from '../../components/less/textarea/textarea.component';
import { AngularMaterialModule } from '../../theme/angular-material.module';
import { CardComponent } from '../../components/full/notes/card/card.component';
import { NavBarAddComponent } from '../../components/full/notes/nav-bar/nav-bar.component';
import { NavBarReadComponent } from '../../components/full/notes/nav-bar/nav-bar-read/nav-bar-read.component';
import { NavBarUpdateComponent } from '../../components/full/notes/nav-bar/nav-bar-update/nav-bar-update.component';
import { NotesRouteModule } from './notes.routing.module';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { ListNotesAllComponent } from './list-notes-all/list-notes-all.component';
import { NotesComponent } from './notes.component';
import { ReadOneNotesComponent } from './read-one-notes/read-one-notes.component';
import { UpdateNotesComponent } from './update-notes/update-notes.component';
import { ViewNotesComponent } from './view-notes/view-notes.component';
import { TitleComponent } from '../../components/full/notes/card/title/title.component';
import { TimestampComponent } from '../../components/full/notes/card/timestamp/timestamp.component';
import { TextComponent } from '../../components/full/notes/card/text/text.component';

@NgModule({
  declarations: [
    NotesComponent,
    ListNotesAllComponent,
    UpdateNotesComponent,
    AddNotesComponent,
    ViewNotesComponent,
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
    HotSnackBarModule,
    CardComponent,
    TitleComponent,
    TimestampComponent,
    TextComponent
  ]
})
export class NotesModule { }
