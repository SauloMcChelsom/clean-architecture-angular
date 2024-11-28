import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
