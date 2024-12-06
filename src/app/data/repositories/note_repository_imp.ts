import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NoteEntity } from 'src/app/domain/entities/note.entity';
import { NoteRepository } from 'src/app/domain/repositories/note_repository';
import { NoteDatasource } from '../datasources/datasource';

@Injectable({ providedIn: 'root' })
export class NoteRepositoryImp implements NoteRepository {

    constructor(private datasource: NoteDatasource) { }

    public findByLinkNote(link: string): Observable<NoteEntity> {
        return this.datasource.findByLinkNote(link);
    }
    
    public createNewNote(note: NoteEntity): Observable<NoteEntity> {
        return this.datasource.createNewNote(note);
    }

    public deleteNote(uid: string): Observable<boolean> {
        return this.datasource.deleteNote(uid);
    }

    public updateNote(note: NoteEntity): Observable<NoteEntity> {
        return this.datasource.updateNote(note);
    }

    public findByTitleNote(title: string): Observable<NoteEntity> {
        return this.datasource.findByTitleNote(title);
    }

    public findByIdNote(title: string): Observable<NoteEntity> {
        return this.datasource.findByIdNote(title);
    }

    public getAllNote(): Observable<NoteEntity[]> {
        return this.datasource.getAllNote();
    }

    public movePositionNote(current: number, destiny: number): Observable<NoteEntity[]> {
        return this.datasource.movePositionNote(current, destiny);
    }

    public favoriteNote(uid: string, favorite: boolean): Observable<NoteEntity> {
        return this.datasource.favoriteNote(uid, favorite);
    }
}