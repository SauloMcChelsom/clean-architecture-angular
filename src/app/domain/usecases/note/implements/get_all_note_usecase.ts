import { Injectable } from "@angular/core";
import { NoteRepository } from "src/app/domain/repositories/note_repository";
import { GetAllNoteUseCase } from "../note_usecase";
import { Observable } from "rxjs";
import { NoteEntity } from "src/app/domain/entities/note.entity";

@Injectable({ providedIn: 'root' })
export class GetAllNoteUseCaseImp implements GetAllNoteUseCase {

    constructor(private _note: NoteRepository) { }
    
    public getAllNote(): Observable<NoteEntity[]> {
        return this._note.getAllNote();
    }
}