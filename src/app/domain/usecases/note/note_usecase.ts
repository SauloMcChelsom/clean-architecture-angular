import { Observable } from "rxjs";
import { NoteEntity } from "../../entities/note.entity";

export abstract class CreateNewNoteUseCase {
    abstract createNewNote(note: NoteEntity): Observable<NoteEntity>;
}

export abstract class DeleteNoteUseCase {
    abstract deleteNote(uid: string): Observable<boolean>;
}

export abstract class UpdateNoteUseCase {
    abstract updateNote(note: NoteEntity): Observable<NoteEntity>;
}

export abstract class IFindNoteByIdUseCase {
    abstract findByIdNote(uid: string): Observable<NoteEntity>;
}

export abstract class IFindNoteByTitleUseCase {
    abstract findByTitleNote(title: string): Observable<NoteEntity>;
}

export abstract class FindNoteByLinkUseCase {
    abstract findByLinkNote(link: string): Observable<NoteEntity>;
}

export abstract class GetAllNoteUseCase {
    abstract getAllNote(): Observable<NoteEntity[]>;
}

export abstract class IMovePositionNoteUseCase {
    abstract movePositionNote(current:number, destiny:number): Observable<NoteEntity[]>;
}

export abstract class IFavoriteNoteUseCase {
    abstract favoriteNote(uid: string, favorite:boolean): Observable<NoteEntity>;
}