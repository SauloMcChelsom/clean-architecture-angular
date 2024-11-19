
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BottomSheetShowcaseComponent } from '../components/bottom-sheet-showcase/bottom-sheet-showcase.component';
import { ButtonBasicShowcaseComponent } from '../components/button-basic-showcase/button-basic-showcase.component';
import { ButtonCancatShowcaseComponent } from '../components/button-cancat-showcase/button-cancat-showcase.component';
import { ButtonFabShowcaseComponent } from '../components/button-fab-showcase/button-fab-showcase.component';
import { ButtonFlatShowcaseComponent } from '../components/button-flat-showcase/button-flat-showcase.component';
import { ButtonIconShowcaseComponent } from '../components/button-icon-showcase/button-icon-showcase.component';
import { ButtonIconSpinnerShowcaseComponent } from '../components/button-icon-spinner-showcase/button-icon-spinner-showcase.component';
import { ButtonRaisedShowcaseComponent } from '../components/button-raised-showcase/button-raised-showcase.component';
import { ButtonStrokedShowcaseComponent } from '../components/button-stroked-showcase/button-stroked-showcase.component';
import { ButtonToggleShowcaseComponent } from '../components/button-toggle-showcase/button-toggle-showcase.component';
import { CardShowcaseComponent } from '../components/card-showcase/card-showcase.component';
import { CheckboxInputShowcaseComponent } from '../components/checkbox-input-showcase/checkbox-input-showcase.component';
import { ChipOptionShowcaseComponent } from '../components/chip-option-showcase/chip-option-showcase.component';
import { DateInputShowcaseComponent } from '../components/date-input-showcase/date-input-showcase.component';
import { DialogModalShowcaseComponent } from '../components/dialog-modal-showcase/dialog-modal-showcase.component';
import { DrawerShowcaseComponent } from '../components/drawer-showcase/drawer-showcase.component';
import { ExpansionPanelShowcaseComponent } from '../components/expansion-panel-showcase/expansion-panel-showcase.component';
import { IconShowcaseComponent } from '../components/icon-showcase/icon-showcase.component';
import { MenuShowcaseComponent } from '../components/menu-showcase/menu-showcase.component';
import { NavBarItensShowcaseComponent } from '../components/nav-bar-itens-showcase/nav-bar-itens-showcase.component';
import { PaginatorShowcaseComponent } from '../components/paginator-showcase/paginator-showcase.component';
import { ProgressBarShowcaseComponent } from '../components/progress-bar-showcase/progress-bar-showcase.component';
import { RadioInputShowcaseComponent } from '../components/radio-input-showcase/radio-input-showcase.component';
import { SelectOptionShowcaseComponent } from '../components/select-option-showcase/select-option-showcase.component';
import { SlideToggleShowcaseComponent } from '../components/slide-toggle-showcase/slide-toggle-showcase.component';
import { SliderShowcaseComponent } from '../components/slider-showcase/slider-showcase.component';
import { SnackBarAlertStaticShowcaseComponent } from '../components/snack-bar-alert-static-showcase/snack-bar-alert-static-showcase.component';
import { SnackBarPositionShowcaseComponent } from '../components/snack-bar-position-showcase/snack-bar-position-showcase.component';
import { SpinnerShowcaseComponent } from '../components/spinner-showcase/spinner-showcase.component';
import { TabsShowcaseComponent } from '../components/tabs-showcase/tabs-showcase.component';
import { TextInputShowcaseComponent } from '../components/text-input-showcase/text-input-showcase.component';
import { TextShowcaseComponent } from '../components/text-showcase/text-showcase.component';
import { TextareasInputShowcaseComponent } from '../components/textareas-input-showcase/textareas-input-showcase.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
      BottomSheetShowcaseComponent,
      DialogModalShowcaseComponent,
      DrawerShowcaseComponent,
      SnackBarPositionShowcaseComponent,
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
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
