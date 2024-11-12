import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BottomSheetComponent } from 'src/app/ui/components/bottom-sheet/bottom-sheet.component';
import { BottomSheetService } from 'src/app/ui/components/bottom-sheet/bottom-sheet.service';
import { DialogModalComponent } from 'src/app/ui/components/dialog/dialog.component';
import { PageComponent } from './page/page.component';

@Component({
  selector: 'app-bottom-sheet-showcase',
  templateUrl: './bottom-sheet-showcase.component.html',
  styleUrls: ['./bottom-sheet-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    BottomSheetComponent,
    MatButtonModule,
    PageComponent,
    DialogModalComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgIf,
    MatDialogModule
  ],
  providers: [BottomSheetService]
})
export class BottomSheetShowcaseComponent {
  animal!: string;
  name!: string;
  constructor(private bottomSheetService: BottomSheetService) { }

  openBottomSheet() {
    const data = { name: this.name, animal: '' };
    const bottomSheetRef = this.bottomSheetService.openBottomSheet(PageComponent, data);

    bottomSheetRef.afterDismissed().subscribe(result => {
      if (result) {
        console.log('BottomSheet fechado com dados:', result);
        this.animal = result;
      }
    });
  }
}
