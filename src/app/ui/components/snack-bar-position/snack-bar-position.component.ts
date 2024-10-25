import {Component} from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

/**
 * @title Snack-bar with configurable position
 */
@Component({
  selector: 'SnackBarPosition',
  templateUrl: './snack-bar-position.component.html',
  styleUrls: ['./snack-bar-position.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatButtonModule, MatSnackBarModule],
})
export class SnackBarPositionComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.open('Cannonball!!', 'Splash', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}