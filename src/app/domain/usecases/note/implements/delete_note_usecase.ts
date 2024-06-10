import { Injectable } from "@angular/core";
import { NoteRepository } from "src/app/domain/repositories/note_repository";
import { DeleteNoteUseCase } from "../note_usecase";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class DeleteNoteUseCaseImp implements DeleteNoteUseCase {

    constructor(private _note: NoteRepository) { }

    public deleteNote(uid: string): Observable<boolean> {
        return this._note.deleteNote(uid);
    }
}