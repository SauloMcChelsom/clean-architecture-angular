import { Injectable } from '@angular/core';
import { Observable, from, of, switchMap } from 'rxjs';
import { NotesEntity } from 'src/app/domain/entities/notes.entity';
import { ILocalStorageAdapter } from 'src/app/infra/cache/local_storage_adapter';
import { INotesCacheDatasource } from '../notes_cache_datasource';

@Injectable({ providedIn: 'root' })
export class NotesCacheLocalStorageDatasourceImp implements INotesCacheDatasource {

    constructor(
        private notesLocalStorage: ILocalStorageAdapter<NotesEntity>
    ) { }

    public createNewNotesLocalStorege(notes: NotesEntity): Observable<NotesEntity> {
        return from(this.notesLocalStorage.save('TOKEN_NOTES', notes)).pipe(
            switchMap(() => of(notes))
        ); 
    }
    
    public deleteNotesLocalStorege(uid: string): Observable<boolean> {
        throw new Error('Method not implemented.');
    }

    public updateNotesLocalStorege(notes: NotesEntity): Observable<NotesEntity> {
        throw new Error('Method not implemented.');
    }

    public findByTitleNotesLocalStorege(uid: string): Observable<NotesEntity> {
        throw new Error('Method not implemented.');
    }
    public findByIdNotesLocalStorege(title: string): Observable<NotesEntity> {
        throw new Error('Method not implemented.');
    }

    public getAllNotesLocalStorege(): Observable<NotesEntity[]> {
        throw new Error('Method not implemented.');
    }

    public movePositionNotesLocalStorege(current: number, destiny: number): Observable<NotesEntity[]> {
        throw new Error('Method not implemented.');
    }

    public favoriteNotesLocalStorege(uid: string, favorite: boolean): Observable<NotesEntity> {
        throw new Error('Method not implemented.');
    }
}