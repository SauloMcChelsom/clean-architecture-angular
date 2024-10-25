import { Component, OnInit } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'Paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  standalone: true,
  imports: [MatPaginatorModule],
})
export class PaginatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
