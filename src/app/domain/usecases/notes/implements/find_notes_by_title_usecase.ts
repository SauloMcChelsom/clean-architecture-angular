import { Injectable } from "@angular/core";
import { NotesRepository } from "src/app/domain/repositories/notes_repository";
import { IFindNotesByTitleUseCase } from "../notes_usecase";
import { Observable } from "rxjs";
import { NotesEntity } from "src/app/domain/entities/notes.entity";

@Injectable({ providedIn: 'root' })
export class FindNotesByTitleUseCaseImp implements IFindNotesByTitleUseCase {

    constructor(private _notes: NotesRepository) { }
    
    public findByTitleNotes(title: string): Observable<NotesEntity> {
        return this._notes.findByTitleNotes(title);
    }
}