import { Observable } from "rxjs";
import { NotesEntity } from "../../entities/notes.entity";

export abstract class ICreateNewNotesUseCase {
    abstract createNewNotes(notes: NotesEntity): Observable<NotesEntity>;
}

export abstract class IDeleteNotesUseCase {
    abstract deleteNotes(uid: string): Observable<boolean>;
}

export abstract class IUpdateNotesUseCase {
    abstract updateNotes(notes: NotesEntity): Observable<NotesEntity>;
}

export abstract class IFindNotesByIdUseCase {
    abstract findByIdNotes(uid: string): Observable<NotesEntity>;
}

export abstract class IFindNotesByTitleUseCase {
    abstract findByTitleNotes(title: string): Observable<NotesEntity>;
}

export abstract class IFindNotesByLinkUseCase {
    abstract findByLinkNotes(link: string): Observable<NotesEntity>;
}

export abstract class IGetAllNotesUseCase {
    abstract getAllNotes(): Observable<NotesEntity[]>;
}

export abstract class IMovePositionNotesUseCase {
    abstract movePositionNotes(current:number, destiny:number): Observable<NotesEntity[]>;
}

export abstract class IFavoriteNotesUseCase {
    abstract favoriteNotes(uid: string, favorite:boolean): Observable<NotesEntity>;
}