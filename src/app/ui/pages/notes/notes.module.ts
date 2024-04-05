import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesRouteModule } from './notes.routing.module';
import { NotesComponent } from './pages/notes.component';
import { ListNotesAllComponent } from './pages/list-notes-all/list-notes-all.component';
import { AddNotesComponent } from './pages/add-notes/add-notes.component';
import { CreateNewNotesUseCase, DeleteNotesUseCase, FindNotesByLinkUseCase, GetAllNotesUseCase, UpdateNotesUseCase } from 'src/app/domain/usecases/notes/notes_usecase';
import { GetAllNotesUseCaseImp } from 'src/app/domain/usecases/notes/implements/get_all_notes_usecase';
import { NotesRepository } from 'src/app/domain/repositories/notes_repository';
import { NotesRepositoryImp } from 'src/app/data/repositories/notes_repository_imp';
import { NotesLocalDatasourceImp } from 'src/app/data/datasources/local/notes_local_datasource_imp';
import { CreateNewNotesUseCaseImp } from 'src/app/domain/usecases/notes/implements/create_new_notes_usecase';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteNotesUseCaseImp } from 'src/app/domain/usecases/notes/implements/delete_notes_usecase';
import { UpdateNotesUseCaseImp } from 'src/app/domain/usecases/notes/implements/update_notes_usecase';
import { UpdateNotesComponent } from './pages/update-notes/update-notes.component';
import { ViewNotesComponent } from './pages/view-notes/view-notes.component';
import { CardComponent } from './components/card/card.component';
import { AngularMaterialModule } from '../../theme/angular-material.module';
import { NavBarAddComponent } from './components/nav-bar-add/nav-bar-add.component';
import { HotInputComponent } from '../../components/input/input.component';
import { HotTextareaComponent } from '../../components/textarea/textarea.component';
import { HotSnackBarModule } from '../../components/snack-bar/snack-bar.module';
import { ReadOneNotesComponent } from './pages/read-one-notes/read-one-notes.component';
import { FindNotesByLinkUseCaseImp } from 'src/app/domain/usecases/notes/implements/find_notes_by_link_usecase';
import { NavBarReadComponent } from './components/nav-bar-read/nav-bar-read.component';
import { NavBarUpdateComponent } from './components/nav-bar-update/nav-bar-update.component';

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
