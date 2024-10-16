import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateService } from '@ngx-translate/core';
import { TextComponent } from '../text/text.component';

export interface SelectionModel {
  description: string;
  cod: string;
}

@Component({
  selector: 'SelectOption',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss'],
  standalone: true,
  imports: [
    MatSelectModule,
    MatFormFieldModule, 
    MatSelectModule, 
    NgFor, 
    MatInputModule, 
    FormsModule,
    TextComponent
  ]
})
export class SelectOptionComponent {
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  @Input() labelSelectEmpy: String = this.translate.instant('NOTE.OPTION_EMPY');
  @Input() default: String = "";
  @Input() selections: SelectionModel[] = [];

  selected = ''
  constructor(private translate: TranslateService){}

  ngOnInit(){
    const option = this.selections.find((option)=>option.cod == this.default);
    this.selected = option?.cod ?? '';
    console.log(this.selected)
  }

  onClickEvent() {
    this.onSelect.emit(this.selected);
  }
}
