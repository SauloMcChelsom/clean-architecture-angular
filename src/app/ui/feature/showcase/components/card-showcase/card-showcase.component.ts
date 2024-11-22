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
  codes = [
    `
    import { CardComponent } from 'src/app/ui/components/card/card.component';
    import { TextCardComponent } from 'src/app/ui/components/card/text/text.component';
    import { TimestampCardComponent } from 'src/app/ui/components/card/timestamp/timestamp.component';
    import { TitleCardComponent } from 'src/app/ui/components/card/title/title.component';
    `,
    `
    <Card>
      <div>
        <TitleCard value="controle de contas"  class="white-space-nowrap overflow-hidden text-overflow-ellipsis mat-card-head text-medium"></TitleCard>
        <TimestampCard value="10/10/2024"  class="flex justify-content-end mat-card-timestamp text-default"></TimestampCard>
        <TextCard  value="Hoje, quero compartilhar uma notícia boa com todos vocês, que estou embarcando em" class="mat-card-body text-small"></TextCard>
      </div>
    </Card>
    `,
  ]

  constructor() { }

  ngOnInit() {
  }

}
