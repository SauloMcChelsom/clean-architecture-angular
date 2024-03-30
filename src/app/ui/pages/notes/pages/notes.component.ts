import { Component, OnInit } from '@angular/core';
import { NotesEntity } from 'src/app/domain/entities/notes.entity';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  public notes: NotesEntity = {
    is_favorite: false,
    text: "",
    timestamp: "",
    title: "",
    current_position: 0,
    link: ""
  }

  public  view_notes: NotesEntity = {
    is_favorite: false,
    text: "",
    timestamp: "",
    title: "",
    current_position: 0,
    link: ""
  }

  constructor() { }

  ngOnInit() { }

  addItem($event:NotesEntity) {
    this.notes = $event;
  }

  viewItem($event:NotesEntity) {
    this.view_notes = $event;
  }

}
