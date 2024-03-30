import { Injectable } from "@angular/core";
import { INotesRepository } from "src/app/domain/repositories/notes_repository";
import { IDeleteNotesUseCase } from "../notes_usecase";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class DeleteNotesUseCaseImp implements IDeleteNotesUseCase {

    constructor(private _notes: INotesRepository) { }

    public deleteNotes(uid: string): Observable<boolean> {
        return this._notes.deleteNotes(uid);
    }
}