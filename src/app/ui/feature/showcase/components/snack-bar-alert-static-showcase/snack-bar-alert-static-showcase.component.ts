import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ScoreboardColor, SnackBarComponent, SnackBarModel } from 'src/app/ui/components/snack-bar/snack-bar.component';

@Component({
  selector: 'app-snack-bar-alert-static-showcase',
  templateUrl: './snack-bar-alert-static-showcase.component.html',
  styleUrls: ['./snack-bar-alert-static-showcase.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    SnackBarComponent,
    MatButtonModule
  ]
})
export class SnackBarAlertStaticShowcaseComponent implements OnInit {
  codes = [
    `
    import { ScoreboardColor, SnackBarComponent, SnackBarModel } from 'src/app/ui/components/snack-bar/snack-bar.component';
    `,
    `
    <SnackBarAlertStatic     
      [openSnackBar]="openSnackBar" 
      [closeSnackBar]="closeSnackBar"
    >
    </SnackBarAlertStatic>
    `,
    `
    protected openSnackBar!: SnackBarModel;
    protected closeSnackBar!: any;
    `,
    `
    errSnackBar() {
      this.openSnackBar = {
        mensagem:  "Error em processar",
        typeScoreboardColor: ScoreboardColor.WARN
      }
    }

    sucsessSnackBar() {
      this.openSnackBar = {
        mensagem:  "Parabens voce acertou",
        typeScoreboardColor: ScoreboardColor.SUCCESS
      }
    }
    `,
  ];
  protected openSnackBar!: SnackBarModel;
  protected closeSnackBar!: any;
  constructor() { }

  ngOnInit() {
  }
  errSnackBar() {
    this.openSnackBar = {
      mensagem:  "Error em processar",
      typeScoreboardColor: ScoreboardColor.WARN
    }
  }

  sucsessSnackBar() {
    this.openSnackBar = {
      mensagem:  "Parabens voce acertou",
      typeScoreboardColor: ScoreboardColor.SUCCESS
    }
  }
}
