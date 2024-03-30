import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { NotesEntity } from 'src/app/domain/entities/notes.entity';

export interface NoteState {
  notes: NotesEntity[];
}

const defaultState: NoteState = {
  notes: [],
};

@Injectable()
export class NoteStore extends ComponentStore<NoteState> {
  constructor() {
    super(defaultState);
  }

  readonly notes$ = this.select(({ notes }) => notes);

  readonly loadNotes = this.updater((state, notes: NotesEntity[] | null) => ({
    ...state,
    notes: notes || [],
  }));
}