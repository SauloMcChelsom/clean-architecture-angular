import { Observable } from "rxjs";
import { NoteEntity } from "../entities/note.entity";

export abstract class NoteRepository {

    abstract createNewNote(user: NoteEntity): Observable<NoteEntity>;

    abstract deleteNote(uid: string): Observable<boolean>;

    abstract updateNote(user: NoteEntity): Observable<NoteEntity>;

    abstract findByTitleNote(title: string): Observable<NoteEntity>;

    abstract findByIdNote(uid: string): Observable<NoteEntity>;

    abstract getAllNote(): Observable<NoteEntity[]>;

    abstract movePositionNote(current: number, destiny: number): Observable<NoteEntity[]>;

    abstract favoriteNote(uid: string, favorite: boolean): Observable<NoteEntity>;

    abstract findByLinkNote(link: string): Observable<NoteEntity>;
}