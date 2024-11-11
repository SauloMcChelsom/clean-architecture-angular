import { CommonModule } from '@angular/common';
import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonToggleGroupComponent } from 'src/app/ui/components/button-toggle/button-toggle.component';

@Component({
  selector: 'app-button-toggle-showcase',
  templateUrl: './button-toggle-showcase.component.html',
  styleUrls: ['./button-toggle-showcase.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    ButtonToggleGroupComponent
  ]
})
export class ButtonToggleShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  
  favoriteColorformControl = new FormControl<string | undefined>("green");
  ingredientsformControl = new FormControl<string[] | undefined>(['flour', 'sugar'],  Validators.required);

  onSingleSelectionChange(value: any) {
    console.log('Selected color:', value);
  }

  onMultipleSelectionChange(value: any) {
    console.log('Selected ingredients:', value);
  }

  @ViewChildren(ButtonToggleGroupComponent) components!: QueryList<ButtonToggleGroupComponent>;

  disableAll() {
    this.components.forEach(component => component.disable());
  }

  enableAll() {
    this.components.forEach(component => component.enable());
  }

  disableFavoriteColor(index: number) {
    const componentArray = this.components.toArray();
    if (componentArray[index]) {
      componentArray[index].disable();
    }
  }

  disableSpecific(groupName: string) {
    const specificComponent = this.components.find(component => component.groupName === groupName);
    if (specificComponent) {
      specificComponent.disable();
    }
  }
  
  reset(){
    this.components.forEach(component => component.resetToInitialState());
  }
}
