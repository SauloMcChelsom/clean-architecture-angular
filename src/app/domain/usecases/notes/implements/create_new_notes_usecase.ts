import { Injectable } from '@angular/core';
import { Observable, catchError, concatMap, last, map, of, switchMap, throwError } from 'rxjs';
import { NotesEntity } from 'src/app/domain/entities/notes.entity';
import { NotesRepository } from 'src/app/domain/repositories/notes_repository';
import { CreateNewNotesUseCase } from '../notes_usecase';
import { TransformTitleTo } from 'src/app/domain/helpers/transform/transform_title_to';

@Injectable({ providedIn: 'root' })
export class CreateNewNotesUseCaseImp implements CreateNewNotesUseCase {

    constructor(private _notes: NotesRepository) { }

    public createNewNotes(notes: NotesEntity): Observable<NotesEntity> {
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
        const createNewNotes = of([]).pipe(switchMap(() => this._notes.createNewNotes(notes)));
        const findByTitleNotes = of([]).pipe(
            switchMap(() => this._notes.findByTitleNotes(notes.title).pipe(
                switchMap((notes) => {
                    if (notes != undefined) {
                        return throwError(() => 'Title already exists.');
                    }
                    return of(notes)
                })
            ))
        );

        return of(
            isValidTitle,
            linkValid,
            isValidText,
            findByTitleNotes,
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
