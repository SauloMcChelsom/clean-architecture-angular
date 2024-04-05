import { Observable } from "rxjs";
import { NotesEntity } from "../entities/notes.entity";

export abstract class NotesRepository {

    abstract createNewNotes(user: NotesEntity): Observable<NotesEntity>;

    abstract deleteNotes(uid: string): Observable<boolean>;

    abstract updateNotes(user: NotesEntity): Observable<NotesEntity>;

    abstract findByTitleNotes(title: string): Observable<NotesEntity>;

    abstract findByIdNotes(uid: string): Observable<NotesEntity>;

    abstract getAllNotes(): Observable<NotesEntity[]>;

    abstract movePositionNotes(current: number, destiny: number): Observable<NotesEntity[]>;

    abstract favoriteNotes(uid: string, favorite: boolean): Observable<NotesEntity>;

    abstract findByLinkNotes(link: string): Observable<NotesEntity>;
}