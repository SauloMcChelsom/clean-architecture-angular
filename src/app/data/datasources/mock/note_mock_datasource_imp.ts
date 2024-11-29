import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject, delay, find, of, switchMap, tap, throwError } from 'rxjs';
import { NoteEntity } from 'src/app/domain/entities/note.entity';
import { v4 as uuidv4 } from 'uuid';
import { NoteRepository } from 'src/app/domain/repositories/note_repository';

@Injectable({ providedIn: 'root' })
export class NoteMockDatasourceImp implements NoteRepository {

    private _note: NoteEntity[] = [];
    private _note$: ReplaySubject<NoteEntity[]> = new ReplaySubject()

    constructor() {
        setTimeout(()=>{
            this.createNewNote({
                title: 'controle de contas',
                link: 'controle-de-contas',
                text: "1.500,00 - inter bank✅"+
                "0,00 - mercado pago"+
                "850,00 - aluguel✅"+
                "95,00 - internet✅"+
                "1.098,25  - fies✅"+
                "0,00 - nubank"+
                "189,90 - celular❎"+
                "0,00 - mercado pago"+
                "850,00 - aluguel✅"+
                "95,00 - internet✅"+
                "1.098,25  - fies✅"+
                "0,00 - nubank"+
                "189,90 - celular❎"+
                "--total de debitos:  4.882"+
                "--entrada:  "+
                "--saldo: "+
                "--caixa: 0,00 ❎ ✅",
                is_favorite: true,
                timestamp: "2024-06-02",
                uid:"df89d86-dfdsfds8jkuk-f87gf8hgf"
            }).subscribe().unsubscribe()
            this.createNewNote({
                link: 'nome-do-criador-do-note',
                title: 'Nome do criador do note',
                text: "Saulo McChelson",
                is_favorite: true,
                timestamp: "2024-06-02",
                uid:"df89d86-dfdsfds8jkuk-f87gf8hgf"
            }).subscribe().unsubscribe()
            this.createNewNote({
                link: 'controle-de-contas',
                title: 'controle de contas',
                text: "1.500,00 - inter bank✅"+
                "0,00 - mercado pago"+
                "850,00 - aluguel✅"+
                "95,00 - internet✅"+
                "1.098,25  - fies✅"+
                "0,00 - nubank"+
                "189,90 - celular❎"+
                "0,00 - mercado pago"+
                "850,00 - aluguel✅"+
                "95,00 - internet✅"+
                "1.098,25  - fies✅"+
                "0,00 - nubank"+
                "189,90 - celular❎"+
                "--total de debitos:  4.882"+
                "--entrada:  "+
                "--saldo: "+
                "--caixa: 0,00 ❎ ✅",
                is_favorite: true,
                timestamp: "2024-06-02",
                uid:"df89d86-dfdsfds8jkuk-f87gf8hgf"
            }).subscribe().unsubscribe()
            this.createNewNote({
                link: 'noticia-boa-trabalhando-na-toei-animation',
                title: 'Noticia boa, trabalhando na Toei Animation',
                text: "Hoje, quero compartilhar uma notícia boa com todos vocês, que estou embarcando em uma nova jornada profissional na Sênior, é uma honra ter a oportunidade de fazer parte de uma empresa tão importante e influente no mercado, estou feliz e motivado para contribuir com meus conhecimentos e experiência."+
                "Gostaria de agradecer a todos os envolvidos no processo de seleção em especial ao Goku e o Brolly que me acompanharam em toda etapa."+
                "Hoje, desejo dividir uma excelente novidade com cada um de vocês. Estou iniciando uma emocionante trajetória profissional na Sênior, uma empresa de grande relevância e influência no mercado. Sinto-me honrado por ter a chance de fazer parte desse time extraordinário e estou animado e determinado a compartilhar meus saberes e vivências."+
                "Quero expressar minha gratidão a todos os que participaram do processo de seleção, especialmente ao Goku e ao Brolly, que estiveram ao meu lado em todas as fases desse caminho."+
                "00020101021126580014br.gov.bcb.pix0136ebd3f7c5-f577-48bd-9f04-dbe27eac38ab5204000053039865802BR5918saulo Silva santos6009SAO PAULO62070503***6304BC0B",
                is_favorite: true,
                timestamp: "2024-06-02",
                uid:"df89d86-dfdsfds8jkuk-f87gf8hgf"
            }).subscribe().unsubscribe()
        },100)
    }

    public createNewNote(_note: NoteEntity): Observable<NoteEntity> {
        _note.uid = uuidv4()
        _note.timestamp = new Date().toString()
        _note.current_position = this.getCurrentPosition();
        
        this._note.push(_note);
        this._note$.next(this._note);
      
      
        return of(_note).pipe(
            delay(200),
        );
    }

    private getCurrentPosition(): number {
        if (!this._note.length) {
            return 1;
        }

        return this._note.length + 1;
    }

    public findByTitleNote(title: string): Observable<NoteEntity> {
        const _note = this._note.find(value => value.title == title);
        return of(_note!).pipe(
            delay(200),
        );
    }

    public findByLinkNote(link: string): Observable<NoteEntity> {
        return of([]).pipe(
            delay(200),
            switchMap(() => {
                const foundNote = this._note.find(value => value.link === link);
                if (foundNote == undefined) {
                    return throwError(() => 'Link not exists.');
                }
                return of(foundNote!);
            })
        );
    }

    public getAllNote(): Observable<NoteEntity[]> {
        return this._note$.asObservable();
    }

    public favoriteNote(uid: string, favorite: boolean): Observable<NoteEntity> {
        this._note = this._note.map(value => {
            if (value.uid == uid) {
                let props = value
                props.is_favorite = favorite;

                return { ...value, ...props };
            } else {
                return value;
            }
        });

        const _note = this._note.find(value => value.uid == uid);
        return of(_note!);
    }

    public movePositionNote(current: number, destiny: number): Observable<NoteEntity[]> {
        throw new Error('Method not implemented.');
    }

    public updateNote(_note: Partial<NoteEntity>): Observable<NoteEntity> {
        this._note = this._note.map(value => {
            if (value.uid == _note.uid) {
                return { ...value, ..._note };
            } else {
                return value;
            }
        });

        const note = this._note.find(value => value.uid == _note.uid);
        this._note$.next(this._note);
        
        return of(note!);
    }

    public deleteNote(uid: string): Observable<boolean> {
        this._note = this._note.filter((value) => value.uid !== uid);
        this._note$.next(this._note);
        return of(true);
    }

    public findByIdNote(uid: string): Observable<NoteEntity> {
        const note = this._note.find(value => value.uid == uid);
        return of(note!);
    }
}