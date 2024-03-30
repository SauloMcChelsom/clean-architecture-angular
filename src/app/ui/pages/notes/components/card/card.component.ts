import { Component, Input, OnChanges } from '@angular/core';
import { NotesEntity } from 'src/app/domain/entities/notes.entity';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {

  @Input() notes!:NotesEntity;

  public card_style:string =  '';
  public card_content_style = '';
  
  ngOnChanges() {
    this.card_content_style = "font-size: 15px;"
    this.card_style = "width: 300px; min-height: auto; max-height: 200px; overflow: hidden; text-overflow: ellipsis; white-space: normal; margin: 15px;"
  }
}
