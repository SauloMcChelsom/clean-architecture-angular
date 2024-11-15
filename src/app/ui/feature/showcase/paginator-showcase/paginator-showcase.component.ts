import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PaginatorComponent } from 'src/app/ui/components/paginator/paginator.component';

@Component({
  selector: 'app-paginator-showcase',
  templateUrl: './paginator-showcase.component.html',
  styleUrls: ['./paginator-showcase.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    PaginatorComponent
  ]
})
export class PaginatorShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
