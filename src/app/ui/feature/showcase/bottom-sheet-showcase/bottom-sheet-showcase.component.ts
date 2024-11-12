import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { BottomSheetComponent } from 'src/app/ui/components/bottom-sheet/bottom-sheet.component';
import { BottomSheetService } from 'src/app/ui/components/bottom-sheet/bottom-sheet.service';


@Component({
  selector: 'app-custom',
  template: `
  <b> {{ nome }} </b>
  <mat-nav-list>
  <a mat-list-item (click)="openLink('Google Keep')">
    <span matListItemTitle>Google Keep</span>
    <span matLine>Add to a note</span>
  </a>

  <a mat-list-item (click)="openLink('Google Docs')">
    <span matListItemTitle>Google Docs</span>
    <span matLine>Embed in a document</span>
  </a>

  <a mat-list-item (click)="openLink('Google Plus')">
    <span matListItemTitle>Google Plus</span>
    <span matLine>Share with your friends</span>
  </a>

  <a mat-list-item (click)="openLink('Google Hangouts')">
    <span matListItemTitle>Google Hangouts</span>
    <span matLine>Show to your coworkers</span>
  </a>

  <a mat-list-item (click)="close($event)">
    <span matListItemTitle>Fechar</span>
    <span matLine>Nao encontrado</span>
  </a>
</mat-nav-list>`,
  standalone: true,
  imports: [MatListModule],
})
export class CustomComponent {

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>) { }
  @Input() nome!:string;
  @Output() currentOpenLink = new EventEmitter<string>(); 

  openLink(link: string): void {
    this.currentOpenLink.emit(link)
  }

  close(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
@Component({
  selector: 'app-bottom-sheet-showcase',
  template: `<button mat-raised-button (click)="openBottomSheet()">Open BottomSheet</button>`,
  styleUrls: ['./bottom-sheet-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    BottomSheetComponent,
    MatButtonModule
  ],
  providers: [BottomSheetService]
})
export class BottomSheetShowcaseComponent {

  constructor(private bottomSheetService: BottomSheetService) { }

  openBottomSheet() {
    this.bottomSheetService.openBottomSheet(CustomComponent);
  }
}
