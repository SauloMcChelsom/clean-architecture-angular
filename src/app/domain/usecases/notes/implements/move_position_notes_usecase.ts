import { Injectable } from "@angular/core";
import { NotesRepository } from "src/app/domain/repositories/notes_repository";
import { IMovePositionNotesUseCase } from "../notes_usecase";
import { Observable } from "rxjs";
import { NotesEntity } from "src/app/domain/entities/notes.entity";

@Injectable({ providedIn: 'root' })
export class MovePositionNotesUseCaseImp implements IMovePositionNotesUseCase {

    constructor(private _notes: NotesRepository) { }

    public movePositionNotes(current: number, destiny: number): Observable<NotesEntity[]> {
        return this._notes.movePositionNotes(current, destiny);
    }
}