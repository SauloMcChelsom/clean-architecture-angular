import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PaginatorComponent } from 'src/app/ui/components/paginator/paginator.component';

@Component({
  selector: 'app-paginator-showcase',
  templateUrl: './paginator-showcase.component.html',
  styleUrls: ['./paginator-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    PaginatorComponent
  ]
})
export class PaginatorShowcaseComponent {

  codes = [
    `import { PaginatorComponent } from 'src/app/ui/components/paginator/paginator.component';`,
    `
    items = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Brasília', 'Fortaleza'];
    itemsPerPage = 2;
    currentPage = 1;
    pagesToShow = 3;
    `,
    `
    <Paginator
      [totalItems]="items.length"
      [itemsPerPage]="itemsPerPage"
      [currentPage]="currentPage"
      [pagesToShow]="3"
      (pageChange)="onPageChange($event)"
    ></Paginator>`,
    `
    onPageChange(page: number): void {
      console.log('Current page:', page);
    }
    `,
  ]

  items = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Brasília', 'Fortaleza'];
  itemsPerPage = 2;
  currentPage = 1;
  pagesToShow = 3;

  onPageChange(page: number): void {
    console.log('Current page:', page);
  }
}
