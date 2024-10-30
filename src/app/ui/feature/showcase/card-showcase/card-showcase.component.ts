import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from 'src/app/ui/components/card/card.component';
import { TextCardComponent } from 'src/app/ui/components/card/text/text.component';
import { TimestampCardComponent } from 'src/app/ui/components/card/timestamp/timestamp.component';
import { TitleCardComponent } from 'src/app/ui/components/card/title/title.component';

@Component({
  selector: 'app-card-showcase',
  templateUrl: './card-showcase.component.html',
  styleUrls: ['./card-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    TitleCardComponent,
    TimestampCardComponent,
    TextCardComponent
  ]
})
export class CardShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
