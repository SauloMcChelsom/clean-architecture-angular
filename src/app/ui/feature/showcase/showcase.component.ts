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
import { ButtonStrokedShowcaseComponent } from './button-stroked-showcase/button-stroked-showcase.component';
import { ButtonRaisedShowcaseComponent } from './button-raised-showcase/button-raised-showcase.component';
import { ButtonFlatShowcaseComponent } from './button-flat-showcase/button-flat-showcase.component';
import { ButtonBasicShowcaseComponent } from './button-basic-showcase/button-basic-showcase.component';
import { ButtonCancatShowcaseComponent } from './button-cancat-showcase/button-cancat-showcase.component';
import { ButtonFabShowcaseComponent } from './button-fab-showcase/button-fab-showcase.component';
import { ButtonIconShowcaseComponent } from './button-icon-showcase/button-icon-showcase.component';
import { ButtonIconSpinnerShowcaseComponent } from './button-icon-spinner-showcase/button-icon-spinner-showcase.component';
import { SliderShowcaseComponent } from './slider-showcase/slider-showcase.component';
import { IconShowcaseComponent } from './icon-showcase/icon-showcase.component';
import { SpinnerShowcaseComponent } from './spinner-showcase/spinner-showcase.component';
import { ProgressBarShowcaseComponent } from './progress-bar-showcase/progress-bar-showcase.component';
import { PaginatorShowcaseComponent } from './paginator-showcase/paginator-showcase.component';
import { ExpansionPanelShowcaseComponent } from './expansion-panel-showcase/expansion-panel-showcase.component';
import { TextShowcaseComponent } from './text-showcase/text-showcase.component';
import { SnackBarAlertStaticShowcaseComponent } from './snack-bar-alert-static-showcase/snack-bar-alert-static-showcase.component';
import { NavBarItensShowcaseComponent } from './nav-bar-itens-showcase/nav-bar-itens-showcase.component';

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
    BottomSheetShowcaseComponent,
    ButtonStrokedShowcaseComponent,
    ButtonRaisedShowcaseComponent,
    ButtonFlatShowcaseComponent,
    ButtonBasicShowcaseComponent,
    ButtonCancatShowcaseComponent,
    ButtonFabShowcaseComponent,
    ButtonIconShowcaseComponent,
    ButtonIconSpinnerShowcaseComponent,
    SliderShowcaseComponent,
    IconShowcaseComponent,
    SpinnerShowcaseComponent,
    ProgressBarShowcaseComponent,
    PaginatorShowcaseComponent,
    ExpansionPanelShowcaseComponent,
    TextShowcaseComponent,
    SnackBarAlertStaticShowcaseComponent,
    NavBarItensShowcaseComponent
  ]
})
export class ShowcaseComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}