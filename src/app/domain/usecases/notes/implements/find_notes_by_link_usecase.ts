import { Injectable } from "@angular/core";
import { NotesRepository } from "src/app/domain/repositories/notes_repository";
import { FindNotesByLinkUseCase } from "../notes_usecase";
import { Observable } from "rxjs";
import { NotesEntity } from "src/app/domain/entities/notes.entity";

@Injectable({ providedIn: 'root' })
export class FindNotesByLinkUseCaseImp implements FindNotesByLinkUseCase {

    constructor(private _notes: NotesRepository) { }

    public findByLinkNotes(link: string): Observable<NotesEntity> {
        return this._notes.findByLinkNotes(link);
    }
}