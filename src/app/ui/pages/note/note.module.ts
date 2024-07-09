import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NoteCardComponent } from '../../components/full/note/card/card.component';
import { NoteCardTextComponent } from '../../components/full/note/card/text/text.component';
import { NoteCardTimestampComponent } from '../../components/full/note/card/timestamp/timestamp.component';
import { NoteCardTitleComponent } from '../../components/full/note/card/title/title.component';
import { NoteNavBarAddComponent } from '../../components/full/note/nav-bar/nav-bar-add/add.component';
import { NoteNavBarReadComponent } from '../../components/full/note/nav-bar/nav-bar-read/read.component';
import { NoteNavBarUpdateComponent } from '../../components/full/note/nav-bar/nav-bar-update/update.component';
import { NoteNavBarComponent } from '../../components/full/note/nav-bar/nav-bar.component';
import { HotInputComponent } from '../../components/less/input/input.component';
import { HotSnackBarModule } from '../../components/less/snack-bar/snack-bar.module';
import { HotTextareaComponent } from '../../components/less/textarea/textarea.component';
import { AngularMaterialModule } from '../../theme/angular-material.module';
import { PageNoteAddComponent } from './add/add.component';
import { PageNoteComponent } from './note.component';
import { NoteRouteModule } from './note.routing.module';
import { PageNoteReadOneComponent } from './read-one/read-one.component';
import { PageNoteUpdateComponent } from './update/update.component';
import { PageNoteViewComponent } from './view/view.component';
import { NoteCardListAllComponent } from '../../components/full/note/card/list-all/list-all.component';
import { CardModule } from '../../components/full/card-p/card';
@NgModule({
  declarations: [
    PageNoteComponent,
    PageNoteUpdateComponent,
    PageNoteAddComponent,
    PageNoteViewComponent,
    PageNoteReadOneComponent
  ],
  imports: [
    CommonModule,
    NoteRouteModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HotInputComponent,
    HotTextareaComponent,
    HotSnackBarModule,
    NoteCardComponent,
    NoteCardTextComponent,
    NoteCardTitleComponent,
    NoteCardTimestampComponent,
    NoteCardListAllComponent,
    NoteNavBarComponent,
    NoteNavBarAddComponent,
    NoteNavBarUpdateComponent,
    NoteNavBarReadComponent,
    CardModule,
  ],
})
export class NoteModule { }
