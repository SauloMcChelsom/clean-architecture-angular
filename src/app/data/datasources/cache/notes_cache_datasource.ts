import { Observable } from 'rxjs';
import { NotesEntity } from 'src/app/domain/entities/notes.entity';

export abstract class INotesCacheDatasource {
    
    abstract createNewNotesLocalStorege(notes: NotesEntity): Observable<NotesEntity>;

    abstract deleteNotesLocalStorege(uid: string): Observable<boolean>;

    abstract updateNotesLocalStorege(notes: NotesEntity): Observable<NotesEntity>;

    abstract findByTitleNotesLocalStorege(uid: string): Observable<NotesEntity>;

    abstract findByIdNotesLocalStorege(title: string): Observable<NotesEntity>;

    abstract getAllNotesLocalStorege(): Observable<NotesEntity[]>;

    abstract movePositionNotesLocalStorege(current: number, destiny: number): Observable<NotesEntity[]>;

    abstract favoriteNotesLocalStorege(uid: string, favorite: boolean): Observable<NotesEntity>;
}