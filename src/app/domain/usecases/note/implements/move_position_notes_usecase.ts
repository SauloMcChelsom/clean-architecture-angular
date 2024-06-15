import { Injectable } from "@angular/core";
import { NoteRepository } from "src/app/domain/repositories/note_repository";
import { IMovePositionNoteUseCase } from "../note_usecase";
import { Observable } from "rxjs";
import { NoteEntity } from "src/app/domain/entities/note.entity";

@Injectable({ providedIn: 'root' })
export class MovePositionNoteUseCaseImp implements IMovePositionNoteUseCase {

    constructor(private _note: NoteRepository) { }

    public movePositionNote(current: number, destiny: number): Observable<NoteEntity[]> {
        return this._note.movePositionNote(current, destiny);
    }
}