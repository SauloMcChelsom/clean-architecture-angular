import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
