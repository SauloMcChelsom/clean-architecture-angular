import { Component, OnInit } from '@angular/core';
import { TitleSimpleComponent } from 'src/app/ui/components/title-simple/title-simple.component';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports:[TitleSimpleComponent]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
