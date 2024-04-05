import { Injectable } from "@angular/core";
import { NotesRepository } from "src/app/domain/repositories/notes_repository";
import { GetAllNotesUseCase } from "../notes_usecase";
import { Observable } from "rxjs";
import { NotesEntity } from "src/app/domain/entities/notes.entity";

@Injectable({ providedIn: 'root' })
export class GetAllNotesUseCaseImp implements GetAllNotesUseCase {

    constructor(private _notes: NotesRepository) { }
    
    public getAllNotes(): Observable<NotesEntity[]> {
        return this._notes.getAllNotes();
    }
}