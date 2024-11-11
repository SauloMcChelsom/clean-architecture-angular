import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SnackBarPositionComponent } from 'src/app/ui/components/snack-bar-position/snack-bar-position.component';

@Component({
  selector: 'app-snack-bar-position-showcase',
  templateUrl: './snack-bar-position-showcase.component.html',
  styleUrls: ['./snack-bar-position-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SnackBarPositionComponent
  ]
})
export class SnackBarPositionShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
