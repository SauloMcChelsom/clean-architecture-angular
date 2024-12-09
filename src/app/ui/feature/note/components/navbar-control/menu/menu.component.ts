import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ListLanguageComponent } from 'src/app/ui/feature/change-language/components/options/list-language.component';
import { ModeThemeFlipComponent } from 'src/app/ui/feature/change-theme/components/mode-theme-flip/mode-theme-flip.component';
import { ROUTING } from 'src/config/endpoints/router-links';
import { MenuProfileComponent } from '../../menu-profile/menu-profile.component';
import { GetCurrentUserUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { UserEntity } from 'src/app/domain/entities/user.entity';
import { take } from 'rxjs';

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
  protected user:UserEntity|undefined = undefined;
  constructor( private router: Router, private currentUser:GetCurrentUserUseCase) { }

  ngOnInit() {
    this.currentUser.getCurrentUser().pipe(take(1)).subscribe(r=>this.user = r)
  }

  goPageProfile() {
    this.router.navigate([ROUTING.NOTE_PROFILE]);
  }


}
