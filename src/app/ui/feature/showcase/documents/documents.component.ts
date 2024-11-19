import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class DocumentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
