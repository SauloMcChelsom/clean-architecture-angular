import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TabsComponent } from 'src/app/ui/components/tabs/tabs.component';

@Component({
  selector: 'app-tabs-showcase',
  templateUrl: './tabs-showcase.component.html',
  styleUrls: ['./tabs-showcase.component.css'],
  standalone: true,
  imports:[
    CommonModule,
    TabsComponent
  ]
})
export class TabsShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
