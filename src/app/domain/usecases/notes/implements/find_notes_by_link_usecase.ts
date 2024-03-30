import { Injectable } from "@angular/core";
import { INotesRepository } from "src/app/domain/repositories/notes_repository";
import { IFindNotesByLinkUseCase } from "../notes_usecase";
import { Observable } from "rxjs";
import { NotesEntity } from "src/app/domain/entities/notes.entity";

@Injectable({ providedIn: 'root' })
export class FindNotesByLinkUseCaseImp implements IFindNotesByLinkUseCase {

    constructor(private _notes: INotesRepository) { }

    public findByLinkNotes(link: string): Observable<NotesEntity> {
        return this._notes.findByLinkNotes(link);
    }
}