import { Injectable } from "@angular/core";
import { NoteRepository } from "src/app/domain/repositories/note_repository";
import { IFindNoteByIdUseCase } from "../note_usecase";
import { Observable } from "rxjs";
import { NoteEntity } from "src/app/domain/entities/note.entity";

@Injectable({ providedIn: 'root' })
export class FindNoteByIdUseCaseImp implements IFindNoteByIdUseCase {

    constructor(private _note: NoteRepository) { }
    
    public findByIdNote(uid: string): Observable<NoteEntity> {
        return this._note.findByIdNote(uid);
    }
}