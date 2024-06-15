import { Injectable } from "@angular/core";
import { NoteRepository } from "src/app/domain/repositories/note_repository";
import { FindNoteByLinkUseCase } from "../note_usecase";
import { Observable } from "rxjs";
import { NoteEntity } from "src/app/domain/entities/note.entity";

@Injectable({ providedIn: 'root' })
export class FindNoteByLinkUseCaseImp implements FindNoteByLinkUseCase {

    constructor(private _note: NoteRepository) { }

    public findByLinkNote(link: string): Observable<NoteEntity> {
        return this._note.findByLinkNote(link);
    }
}