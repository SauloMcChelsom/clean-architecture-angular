import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteEntity } from 'src/app/domain/entities/note.entity';

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.css']
})
export class ViewNoteComponent implements OnInit {

  @Input() date!: NoteEntity;
  public notaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.notaForm = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      current_position: [0, Validators.required],
      is_favorite: [false],
      uid: [false],
    });
  }

  ngOnInit() {}

  ngOnChanges() {
    this.notaForm.patchValue({
      title: this.date.title,
      text: this.date.text,
      current_position: this.date.current_position,
      is_favorite: this.date.is_favorite,
      uid: this.date.uid,
    })
  }
}
