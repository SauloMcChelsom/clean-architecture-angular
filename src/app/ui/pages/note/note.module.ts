import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HotInputComponent } from '../../components/less/input/input.component';
import { HotSnackBarModule } from '../../components/less/snack-bar/snack-bar.module';
import { HotTextareaComponent } from '../../components/less/textarea/textarea.component';
import { AngularMaterialModule } from '../../theme/angular-material.module';
import { CardComponent } from '../../components/full/note/card/card.component';
import { NavBarAddComponent } from '../../components/full/note/nav-bar/nav-bar.component';
import { NavBarReadComponent } from '../../components/full/note/nav-bar/nav-bar-read/nav-bar-read.component';
import { NavBarUpdateComponent } from '../../components/full/note/nav-bar/nav-bar-update/nav-bar-update.component';
import { NoteRouteModule } from './note.routing.module';
import { AddNoteComponent } from './add-note/add-note.component';
import { ListNoteAllComponent } from './list-note-all/list-note-all.component';
import { NoteComponent } from './note.component';
import { ReadOneNoteComponent } from './read-one-note/read-one-note.component';
import { UpdateNoteComponent } from './update-note/update-note.component';
import { ViewNoteComponent } from './view-note/view-note.component';
import { TitleComponent } from '../../components/full/note/card/title/title.component';
import { TimestampComponent } from '../../components/full/note/card/timestamp/timestamp.component';
import { TextComponent } from '../../components/full/note/card/text/text.component';

@NgModule({
  declarations: [
    NoteComponent,
    ListNoteAllComponent,
    UpdateNoteComponent,
    AddNoteComponent,
    ViewNoteComponent,
    NavBarUpdateComponent,
    NavBarAddComponent,
    ReadOneNoteComponent,
    NavBarReadComponent
  ],
  imports: [
    CommonModule,
    NoteRouteModule,
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
export class NoteModule { }
