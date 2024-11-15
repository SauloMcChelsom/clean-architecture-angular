import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PaginatorComponent } from 'src/app/ui/components/paginator/paginator.component';

@Component({
  selector: 'app-paginator-showcase',
  templateUrl: './paginator-showcase.component.html',
  styleUrls: ['./paginator-showcase.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    PaginatorComponent,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class PaginatorShowcaseComponent {

  items = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Brasília', 'Fortaleza'];
  itemsPerPage = 2;
  currentPage = 1;
  pagesToShow = 3;

  onPageChange(page: number): void {
    console.log('Current page:', page);
  }
}
