import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SelectOptionShowcaseComponent } from './select-option-showcase/select-option-showcase.component';
import { DateInputShowcaseComponent } from './date-input-showcase/date-input-showcase.component';
import { TextInputShowcaseComponent } from './text-input-showcase/text-input-showcase.component';
import { TextareasInputShowcaseComponent } from './textareas-input-showcase/textareas-input-showcase.component';
import { CardShowcaseComponent } from './card-showcase/card-showcase.component';
import { RadioInputShowcaseComponent } from './radio-input-showcase/radio-input-showcase.component';
import { MenuShowcaseComponent } from './menu-showcase/menu-showcase.component';
import { CheckboxInputShowcaseComponent } from './checkbox-input-showcase/checkbox-input-showcase.component';
import { ButtonToggleShowcaseComponent } from './button-toggle-showcase/button-toggle-showcase.component';
import { ChipOptionShowcaseComponent } from './chip-option-showcase/chip-option-showcase.component';
import { SlideToggleShowcaseComponent } from './slide-toggle-showcase/slide-toggle-showcase.component';
import { TabsShowcaseComponent } from './tabs-showcase/tabs-showcase.component';
import { BottomSheetComponent } from '../../components/bottom-sheet/bottom-sheet.component';
import { DialogModalComponent } from '../../components/dialog/dialog.component';
import { DrawerComponent } from '../../components/drawer/drawer.component';
import { SnackBarPositionComponent } from '../../components/snack-bar-position/snack-bar-position.component';
import { BottomSheetShowcaseComponent } from './bottom-sheet-showcase/bottom-sheet-showcase.component';
import { SnackBarPositionShowcaseComponent } from './snack-bar-position-showcase/snack-bar-position-showcase.component';
import { DrawerShowcaseComponent } from './drawer-showcase/drawer-showcase.component';
import { DialogModalShowcaseComponent } from './dialog-modal-showcase/dialog-modal-showcase.component';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SelectOptionShowcaseComponent,
    DateInputShowcaseComponent,
    TextInputShowcaseComponent,
    TextareasInputShowcaseComponent,
    CardShowcaseComponent,
    RadioInputShowcaseComponent,
    MenuShowcaseComponent,
    CheckboxInputShowcaseComponent,
    ButtonToggleShowcaseComponent,
    ChipOptionShowcaseComponent,
    SlideToggleShowcaseComponent,
    TabsShowcaseComponent,
    BottomSheetComponent,
    DialogModalComponent,
    DrawerComponent,
    SnackBarPositionComponent,
    BottomSheetShowcaseComponent,
    SnackBarPositionShowcaseComponent,
    DrawerShowcaseComponent,
    DialogModalShowcaseComponent,
    BottomSheetShowcaseComponent
  ]
})
export class ShowcaseComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}
