import { Injectable } from "@angular/core";
import { NotesRepository } from "src/app/domain/repositories/notes_repository";
import { DeleteNotesUseCase } from "../notes_usecase";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class DeleteNotesUseCaseImp implements DeleteNotesUseCase {

    constructor(private _notes: NotesRepository) { }

    public deleteNotes(uid: string): Observable<boolean> {
        return this._notes.deleteNotes(uid);
    }
}