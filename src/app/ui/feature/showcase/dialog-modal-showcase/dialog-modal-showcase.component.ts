import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DialogModalComponent } from 'src/app/ui/components/dialog/dialog.component';

@Component({
  selector: 'app-dialog-modal-showcase',
  templateUrl: './dialog-modal-showcase.component.html',
  styleUrls: ['./dialog-modal-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    DialogModalComponent
  ]
})
export class DialogModalShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
