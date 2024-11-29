import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ListLanguageComponent } from 'src/app/ui/feature/change-language/components/options/list-language.component';
import { ModeThemeFlipComponent } from 'src/app/ui/feature/change-theme/components/mode-theme-flip/mode-theme-flip.component';
import { ROUTING } from 'src/config/endpoints/router-links';

@Component({
  selector: 'Menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ListLanguageComponent,
    MatButtonModule,
    ModeThemeFlipComponent,
    RouterModule
  ]
})
export class MenuComponent implements OnInit {
  protected SIGN_IN = ROUTING.AUTH_SIGN_IN;
  constructor() { }

  ngOnInit() {
  }

}
