import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SnackBarPositionComponent } from 'src/app/ui/components/snack-bar-position/snack-bar-position.component';

@Component({
  selector: 'app-snack-bar-position-showcase',
  templateUrl: './snack-bar-position-showcase.component.html',
  styleUrls: ['./snack-bar-position-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SnackBarPositionComponent,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class SnackBarPositionShowcaseComponent {
  codes = [
    `
    import { SnackBarPositionComponent } from 'src/app/ui/components/snack-bar-position/snack-bar-position.component';
    `,
    `
    <SnackBarPosition></SnackBarPosition>
    `,
    `
    @ViewChild(SnackBarPositionComponent) component!: SnackBarPositionComponent;
    this.component.openSnackBar(this.name, 'Fechar')
    `
  ];
  name!: string;

  @ViewChild(SnackBarPositionComponent) component!: SnackBarPositionComponent;

  openSnackBar() {
    this.component.openSnackBar(this.name, 'Fechar')
  }
}
