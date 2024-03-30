import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotesEntity } from 'src/app/domain/entities/notes.entity';
import { INotesRepository } from 'src/app/domain/repositories/notes_repository';
import { INotesHttpDatasource } from '../datasources/http/notes_http_datasource';


@Injectable({ providedIn: 'root' })
export class NotesRepositoryImp implements INotesRepository {

    constructor(private datasource: INotesHttpDatasource) { }

    public findByLinkNotes(link: string): Observable<NotesEntity> {
        return this.datasource.findByLinkNotes(link);
    }
    
    public createNewNotes(notes: NotesEntity): Observable<NotesEntity> {
        return this.datasource.createNewNotes(notes);
    }

    public deleteNotes(uid: string): Observable<boolean> {
        return this.datasource.deleteNotes(uid);
    }

    public updateNotes(notes: NotesEntity): Observable<NotesEntity> {
        return this.datasource.updateNotes(notes);
    }

    public findByTitleNotes(title: string): Observable<NotesEntity> {
        return this.datasource.findByTitleNotes(title);
    }

    public findByIdNotes(title: string): Observable<NotesEntity> {
        return this.datasource.findByIdNotes(title);
    }

    public getAllNotes(): Observable<NotesEntity[]> {
        return this.datasource.getAllNotes();
    }

    public movePositionNotes(current: number, destiny: number): Observable<NotesEntity[]> {
        return this.datasource.movePositionNotes(current, destiny);
    }

    public favoriteNotes(uid: string, favorite: boolean): Observable<NotesEntity> {
        return this.datasource.favoriteNotes(uid, favorite);
    }
}