import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ExpansionPanelComponent } from 'src/app/ui/components/expansion-panel/expansion-panel.component';

@Component({
  selector: 'app-expansion-panel-showcase',
  templateUrl: './expansion-panel-showcase.component.html',
  styleUrls: ['./expansion-panel-showcase.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    ExpansionPanelComponent,
    MatIconModule
  ]
})
export class ExpansionPanelShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
