import { Injectable } from "@angular/core";
import { INotesRepository } from "src/app/domain/repositories/notes_repository";
import { IFindNotesByIdUseCase } from "../notes_usecase";
import { Observable } from "rxjs";
import { NotesEntity } from "src/app/domain/entities/notes.entity";

@Injectable({ providedIn: 'root' })
export class FindNotesByIdUseCaseImp implements IFindNotesByIdUseCase {

    constructor(private _notes: INotesRepository) { }
    
    public findByIdNotes(uid: string): Observable<NotesEntity> {
        return this._notes.findByIdNotes(uid);
    }
}