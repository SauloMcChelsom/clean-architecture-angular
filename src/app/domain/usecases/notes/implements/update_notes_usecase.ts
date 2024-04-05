import { Injectable } from "@angular/core";
import { NotesRepository } from "src/app/domain/repositories/notes_repository";
import { UpdateNotesUseCase } from "../notes_usecase";
import { Observable, catchError, concatMap, last, map, of, switchMap, throwError } from "rxjs";
import { NotesEntity } from "src/app/domain/entities/notes.entity";
import { TransformTitleTo } from "src/app/domain/helpers/transform/transform_title_to";

@Injectable({ providedIn: 'root' })
export class UpdateNotesUseCaseImp implements UpdateNotesUseCase {

    constructor(private _notes: NotesRepository) { }

    public updateNotes(notes: NotesEntity): Observable<NotesEntity> {
        const isValidTitle = of([]).pipe(switchMap(() => this.isValidTitle(notes.title)));
        const linkValid = of([]).pipe(switchMap(() => TransformTitleTo.link(notes.title).pipe(
            switchMap((link:string)=>{
                if (!link) {
                    return throwError(() => 'Não foi possivel criar link do notes.');
                }

                notes.link = link
                return of(notes)
            })
        )));
        const isValidText = of([]).pipe(switchMap(() => this.isValidText(notes.text)));
        const createNewNotes = of([]).pipe(switchMap(() => this._notes.updateNotes(notes)));

        return of(
            isValidTitle,
            linkValid,
            isValidText,
            createNewNotes
        ).pipe(
            concatMap(observable => observable),
            last()
        ).pipe(
            catchError((error) => {
                return throwError(() => error);
            }),
            map(() => notes)
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