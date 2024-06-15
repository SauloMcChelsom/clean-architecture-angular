import { Injectable } from "@angular/core";
import { NoteRepository } from "src/app/domain/repositories/note_repository";
import { IFavoriteNoteUseCase } from "../note_usecase";
import { Observable } from "rxjs";
import { NoteEntity } from "src/app/domain/entities/note.entity";

@Injectable({ providedIn: 'root' })
export class FavoriteNoteUseCaseImp implements IFavoriteNoteUseCase {

    constructor(private _note: NoteRepository) { }

    public favoriteNote(uid: string, favorite: boolean): Observable<NoteEntity> {
        return this._note.favoriteNote(uid, favorite);
    }
}