import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BottomSheetComponent } from 'src/app/ui/components/bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-bottom-sheet-showcase',
  templateUrl: './bottom-sheet-showcase.component.html',
  styleUrls: ['./bottom-sheet-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    BottomSheetComponent
  ]
})
export class BottomSheetShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
