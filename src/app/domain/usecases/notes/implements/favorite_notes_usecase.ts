import { Injectable } from "@angular/core";
import { INotesRepository } from "src/app/domain/repositories/notes_repository";
import { IFavoriteNotesUseCase } from "../notes_usecase";
import { Observable } from "rxjs";
import { NotesEntity } from "src/app/domain/entities/notes.entity";

@Injectable({ providedIn: 'root' })
export class FavoriteNotesUseCaseImp implements IFavoriteNotesUseCase {

    constructor(private _notes: INotesRepository) { }

    public favoriteNotes(uid: string, favorite: boolean): Observable<NotesEntity> {
        return this._notes.favoriteNotes(uid, favorite);
    }
}