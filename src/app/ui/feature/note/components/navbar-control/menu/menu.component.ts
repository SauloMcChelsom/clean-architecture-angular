import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ListLanguageComponent } from 'src/app/ui/feature/change-language/components/options/list-language.component';
import { ModeThemeFlipComponent } from 'src/app/ui/feature/change-theme/components/mode-theme-flip/mode-theme-flip.component';
import { ROUTING } from 'src/config/endpoints/router-links';
import { MenuProfileComponent } from '../../menu-profile/menu-profile.component';

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
    RouterModule,
    MenuProfileComponent,
  ]
})
export class MenuComponent implements OnInit {
  protected SIGN_IN = ROUTING.AUTH_SIGN_IN;
  constructor( private router: Router) { }

  ngOnInit() {
  }

  goPageProfile() {
    this.router.navigate([ROUTING.NOTE_PROFILE]);
  }


}
