import { Injectable } from "@angular/core";
import { NoteRepository } from "src/app/domain/repositories/note_repository";
import { UpdateNoteUseCase } from "../note_usecase";
import { Observable, catchError, concatMap, last, map, of, switchMap, throwError } from "rxjs";
import { NoteEntity } from "src/app/domain/entities/note.entity";
import { TransformTitleTo } from "src/app/domain/helpers/transform/transform_title_to";

@Injectable({ providedIn: 'root' })
export class UpdateNoteUseCaseImp implements UpdateNoteUseCase {

    constructor(private _note: NoteRepository) { }

    public updateNote(note: NoteEntity): Observable<NoteEntity> {
        const isValidTitle = of([]).pipe(switchMap(() => this.isValidTitle(note.title)));
        const linkValid = of([]).pipe(switchMap(() => TransformTitleTo.link(note.title).pipe(
            switchMap((link:string)=>{
                if (!link) {
                    return throwError(() => 'Não foi possivel criar link do note.');
                }

                note.link = link
                return of(note)
            })
        )));
        const isValidText = of([]).pipe(switchMap(() => this.isValidText(note.text)));
        const createNewNote = of([]).pipe(switchMap(() => this._note.updateNote(note)));

        return of(
            isValidTitle,
            linkValid,
            isValidText,
            createNewNote
        ).pipe(
            concatMap(observable => observable),
            last()
        ).pipe(
            catchError((error) => {
                return throwError(() => error);
            }),
            map(() => note)
        );
    }

    private isValidTitle(title: string): Observable<boolean> {
        if (title == "" || title == undefined || title == null) {
            return throwError(() => 'Title cannot be empty.');
        }

        if (title.length < 3 || title.length > 100) {
            return throwError(() => `Title must be between 3 and 100 characters.`);
        }

        return of(true);
    }

    private isValidText(text: string): Observable<boolean> {
        if (text == "" || text == undefined || text == null) {
            return throwError(() => 'Text cannot be empty.');
        }

        if (text.length < 5 || text.length > 5000) {
            return throwError(() => `Text must be between 5 and 5000 characters.`);
        }

        return of(true);
    }
}