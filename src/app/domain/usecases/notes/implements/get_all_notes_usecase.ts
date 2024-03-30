import { Injectable } from "@angular/core";
import { INotesRepository } from "src/app/domain/repositories/notes_repository";
import { IGetAllNotesUseCase } from "../notes_usecase";
import { Observable } from "rxjs";
import { NotesEntity } from "src/app/domain/entities/notes.entity";

@Injectable({ providedIn: 'root' })
export class GetAllNotesUseCaseImp implements IGetAllNotesUseCase {

    constructor(private _notes: INotesRepository) { }
    
    public getAllNotes(): Observable<NotesEntity[]> {
        return this._notes.getAllNotes();
    }
}