import { Observable } from 'rxjs';
import { NotesEntity } from 'src/app/domain/entities/notes.entity';

export abstract class INotesHttpDatasource {

    abstract createNewNotes(notes: NotesEntity): Observable<NotesEntity>;

    abstract getAllNotes(): Observable<NotesEntity[]>;

    abstract favoriteNotes(uid: string, favorite: boolean): Observable<NotesEntity>;

    abstract movePositionNotes(current: number, destiny: number): Observable<NotesEntity[]>;

    abstract findByTitleNotes(title: string): Observable<NotesEntity>;

    abstract updateNotes(notes: NotesEntity): Observable<NotesEntity>;

    abstract deleteNotes(uid: string): Observable<boolean>;

    abstract findByIdNotes(uid: string): Observable<NotesEntity>;

    abstract findByLinkNotes(link: string): Observable<NotesEntity>;
}
