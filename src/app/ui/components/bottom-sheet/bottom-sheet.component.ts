
import {Component} from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Bottom Sheet Overview
 */
@Component({
  selector: 'BottomSheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatBottomSheetModule],
})
export class BottomSheetComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetBoxComponent);
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template:`
  <mat-nav-list>
  <a href="https://keep.google.com/" mat-list-item (click)="openLink($event)">
    <span matListItemTitle>Google Keep</span>
    <span matLine>Add to a note</span>
  </a>

  <a href="https://docs.google.com/" mat-list-item (click)="openLink($event)">
    <span matListItemTitle>Google Docs</span>
    <span matLine>Embed in a document</span>
  </a>

  <a href="https://plus.google.com/" mat-list-item (click)="openLink($event)">
    <span matListItemTitle>Google Plus</span>
    <span matLine>Share with your friends</span>
  </a>

  <a href="https://hangouts.google.com/" mat-list-item (click)="openLink($event)">
    <span matListItemTitle>Google Hangouts</span>
    <span matLine>Show to your coworkers</span>
  </a>
</mat-nav-list>`,
  standalone: true,
  imports: [MatListModule],
})
export class BottomSheetBoxComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetBoxComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}