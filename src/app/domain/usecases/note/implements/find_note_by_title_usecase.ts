import { Injectable } from "@angular/core";
import { NoteRepository } from "src/app/domain/repositories/note_repository";
import { IFindNoteByTitleUseCase } from "../note_usecase";
import { Observable } from "rxjs";
import { NoteEntity } from "src/app/domain/entities/note.entity";

@Injectable({ providedIn: 'root' })
export class FindNoteByTitleUseCaseImp implements IFindNoteByTitleUseCase {

    constructor(private _note: NoteRepository) { }
    
    public findByTitleNote(title: string): Observable<NoteEntity> {
        return this._note.findByTitleNote(title);
    }
}