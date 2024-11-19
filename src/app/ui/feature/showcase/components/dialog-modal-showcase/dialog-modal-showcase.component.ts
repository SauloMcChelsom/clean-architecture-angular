import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogModalComponent } from 'src/app/ui/components/dialog/dialog.component';
import { DialogService } from 'src/app/ui/components/dialog/dialog.service';
import { PageComponent } from './page/page.component';

@Component({ 
  selector: 'app-dialog-modal-showcase',
  templateUrl: './dialog-modal-showcase.component.html',
  styleUrls: ['./dialog-modal-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    PageComponent,
    DialogModalComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    NgIf,
    MatDialogModule
  ]
})
export class DialogModalShowcaseComponent {
  animal!: string;
  name!: string;
  constructor(private dialogService: DialogService) {}

  openDialog(): void {
    const data = { name: this.name, animal: '' };
    this.dialogService.openDialog(PageComponent, data).subscribe(result => {
      if (result) {
        console.log('Diálogo fechado com dados:', result);
        this.animal = result;
      }
    });
  }
}
