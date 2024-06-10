import { Component, OnInit } from '@angular/core';
import { NoteEntity } from 'src/app/domain/entities/note.entity';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  public note: NoteEntity = {
    is_favorite: false,
    text: "",
    timestamp: "",
    title: "",
    current_position: 0,
    link: ""
  }

  public  view_note: NoteEntity = {
    is_favorite: false,
    text: "",
    timestamp: "",
    title: "",
    current_position: 0,
    link: ""
  }

  constructor() { }

  ngOnInit() { }

  addItem($event:NoteEntity) {
    this.note = $event;
  }

  viewItem($event:NoteEntity) {
    this.view_note = $event;
  }

}
