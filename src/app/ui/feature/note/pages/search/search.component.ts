import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonCancatComponent } from 'src/app/ui/components/button-cancat/button-cancat.component';
import { NavBarItensComponent } from 'src/app/ui/components/nav-bar/nav-bar-itens.component';
import { ROUTING } from 'src/config/endpoints/router-links';
import { SearchComponent as SearchModule } from 'src/app/ui/components/search/search.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    NavBarItensComponent,
    ButtonCancatComponent,
    SearchModule
  ]
})
export class SearchComponent implements OnInit {
  ROOT = ROUTING.ROOT;
  value = '';
  protected spinner: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  add() {
    this.spinner = true;

    setTimeout(()=>{
      this.spinner = false;
    },2000)
  }

}
