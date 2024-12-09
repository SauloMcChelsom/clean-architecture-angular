import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { take } from 'rxjs';
import { GetCurrentUserUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { ButtonCancatComponent } from 'src/app/ui/components/button-cancat/button-cancat.component';
import { ExpansionPanelComponent } from 'src/app/ui/components/expansion-panel/expansion-panel.component';
import { NavBarItensComponent } from 'src/app/ui/components/nav-bar/nav-bar-itens.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    ExpansionPanelComponent,
    MatIconModule,
    NavBarItensComponent,
    ButtonCancatComponent
  ]
})
export class ProfileComponent implements OnInit {
  imageUrl: string = 'assets/image/profile.jpg';
  name: string = 'Olá, Estranho';
  spinner = false

  constructor(private currentUser:GetCurrentUserUseCase) { }

  ngOnInit() {
    this.currentUser.getCurrentUser().pipe(take(1)).subscribe(r=>console.log(r))
  }

  back() {
    history.back()
  }

  logOut(){
    this.spinner = true
  }
}
