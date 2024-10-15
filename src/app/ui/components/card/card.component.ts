import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'Card',
    template: `
        <mat-card [routerLink]="link">
            <ng-content></ng-content>
        </mat-card>
    `,
    standalone: true,
    imports: [
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        CommonModule,
        MatFormFieldModule,
        MatCardModule,
        RouterModule,
    ],
    styleUrls: ['./card.component.scss'],
})
export class CardComponent { 
    @Input() link: string | undefined;
}