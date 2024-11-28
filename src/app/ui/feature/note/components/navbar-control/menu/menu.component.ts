import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ListLanguageComponent } from 'src/app/ui/feature/change-language/components/options/list-language.component';
import { ModeThemeComponent } from 'src/app/ui/feature/change-theme/components/mode-theme/mode-theme.component';
import { ButtonToggleGroupComponent } from 'src/app/ui/components/button-toggle/button-toggle.component';
import { FormControl } from '@angular/forms';
import { ButtonToggleLabelComponent } from 'src/app/ui/components/button-toggle/component/button-toggle-label/button-toggle-label.component';
import { ButtonToggleLabelStyleWidthFullDirective } from 'src/app/ui/components/button-toggle/directive/button-toggle-label-style.directive';
import { ModeThemeFlipComponent } from 'src/app/ui/feature/change-theme/components/mode-theme-flip/mode-theme-flip.component';
import { RouterModule } from '@angular/router';
import { ROUTER_LINKS } from 'src/config/endpoints/router-links';
    
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
  protected SIGN_IN = ROUTER_LINKS.AUTH_SIGN_IN;
  constructor() { }

  ngOnInit() {
  }
        
}
