import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject, delay, find, of, switchMap, tap, throwError } from 'rxjs';
import { NotesEntity } from 'src/app/domain/entities/notes.entity';
import { v4 as uuidv4 } from 'uuid';
import { NotesRepository } from 'src/app/domain/repositories/notes_repository';

@Injectable({ providedIn: 'root' })
export class NotesLocalDatasourceImp implements NotesRepository {

    private _notes: NotesEntity[] = [];
    private _notes$: ReplaySubject<NotesEntity[]> = new ReplaySubject()

    constructor() {
        setTimeout(()=>{
            this.createNewNotes({
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
            this.createNewNotes({
                link: 'nome-do-criador-do-notes',
                title: 'Nome do criador do notes',
                text: "Saulo McChelson",
                is_favorite: true,
                timestamp: "2024-06-02",
                uid:"df89d86-dfdsfds8jkuk-f87gf8hgf"
            }).subscribe().unsubscribe()
            this.createNewNotes({
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
            this.createNewNotes({
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

    public createNewNotes(_notes: NotesEntity): Observable<NotesEntity> {
        _notes.uid = uuidv4()
        _notes.timestamp = new Date().toString()
        _notes.current_position = this.getCurrentPosition();
        
        this._notes.push(_notes);
        this._notes$.next(this._notes);
      
      
        console.log(this._notes)
        return of(_notes).pipe(
            delay(200),
        );
    }

    private getCurrentPosition(): number {
        if (!this._notes.length) {
            return 1;
        }

        return this._notes.length + 1;
    }

    public findByTitleNotes(title: string): Observable<NotesEntity> {
        const _notes = this._notes.find(value => value.title == title);
        return of(_notes!).pipe(
            delay(200),
        );
    }

    public findByLinkNotes(link: string): Observable<NotesEntity> {
        return of([]).pipe(
            delay(200),
            switchMap(() => {
                const foundNote = this._notes.find(value => value.link === link);
                if (foundNote == undefined) {
                    return throwError(() => 'Link not exists.');
                }
                return of(foundNote!);
            })
        );
    }

    public getAllNotes(): Observable<NotesEntity[]> {
        return this._notes$.asObservable();
    }

    public favoriteNotes(uid: string, favorite: boolean): Observable<NotesEntity> {
        this._notes = this._notes.map(value => {
            if (value.uid == uid) {
                let props = value
                props.is_favorite = favorite;

                return { ...value, ...props };
            } else {
                return value;
            }
        });

        const _notes = this._notes.find(value => value.uid == uid);
        return of(_notes!);
    }

    public movePositionNotes(current: number, destiny: number): Observable<NotesEntity[]> {
        throw new Error('Method not implemented.');
    }

    public updateNotes(_notes: Partial<NotesEntity>): Observable<NotesEntity> {
        this._notes = this._notes.map(value => {
            if (value.uid == _notes.uid) {
                return { ...value, ..._notes };
            } else {
                return value;
            }
        });

        const note = this._notes.find(value => value.uid == _notes.uid);
        this._notes$.next(this._notes);
        
        return of(note!);
    }

    public deleteNotes(uid: string): Observable<boolean> {
        this._notes = this._notes.filter((value) => value.uid !== uid);
        this._notes$.next(this._notes);
        return of(true);
    }

    public findByIdNotes(uid: string): Observable<NotesEntity> {
        const note = this._notes.find(value => value.uid == uid);
        return of(note!);
    }
}