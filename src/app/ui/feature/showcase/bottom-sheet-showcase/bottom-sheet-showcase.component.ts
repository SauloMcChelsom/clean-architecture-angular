import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { BottomSheetComponent } from 'src/app/ui/components/bottom-sheet/bottom-sheet.component';
import { BottomSheetService } from 'src/app/ui/components/bottom-sheet/bottom-sheet.service';

@Component({
  selector: 'app-custom',
  template: `
 <b> {{ data.nome }} </b>
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

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<CustomComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { nome: string }
  ) { }

  openLink(link: string): void {
    this._bottomSheetRef.dismiss(link);
  }

  close(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(){
    console.log('ngOnInit')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
  }
}
@Component({
  selector: 'app-bottom-sheet-showcase',
  templateUrl: './bottom-sheet-showcase.component.html',
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
    const bottomSheetRef = this.bottomSheetService.openBottomSheet(CustomComponent, { nome: 'Nome Exemplo' });

    bottomSheetRef.afterDismissed().subscribe(result => {
      if (result) {
        console.log('Link selecionado:', result);
      }
    });
  }
}
