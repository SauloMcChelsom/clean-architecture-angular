import { RouterModule, Routes } from '@angular/router';
import { BottomSheetShowcaseComponent } from './bottom-sheet-showcase/bottom-sheet-showcase.component';
import { DrawerShowcaseComponent } from './drawer-showcase/drawer-showcase.component';
import { ROUTER_LINKS } from 'src/config/endpoints/router-links';
import { NavBarItensShowcaseComponent } from './nav-bar-itens-showcase/nav-bar-itens-showcase.component';
import { SnackBarAlertStaticShowcaseComponent } from './snack-bar-alert-static-showcase/snack-bar-alert-static-showcase.component';
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
import { DialogModalShowcaseComponent } from './dialog-modal-showcase/dialog-modal-showcase.component';
import { SnackBarPositionShowcaseComponent } from './snack-bar-position-showcase/snack-bar-position-showcase.component';
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
import { TextShowcaseComponent } from './text-showcase/text-showcase.component';
import { ExpansionPanelShowcaseComponent } from './expansion-panel-showcase/expansion-panel-showcase.component';
import { PaginatorShowcaseComponent } from './paginator-showcase/paginator-showcase.component';


const routes: Routes = [
  { 
    path: '', 
    component: BottomSheetShowcaseComponent, 
    data: { title: 'Bottom sheet' } 
  },
    { 
      path: 'bottom-sheet', 
      component: BottomSheetShowcaseComponent, 
      data: { title: 'Bottom sheet' } 
    },
    { 
      path: 'drawer', 
      component: DrawerShowcaseComponent, 
      data: { title: 'Drawer' } 
    },
    { 
      path: 'select-option', 
      component: SelectOptionShowcaseComponent, 
      data: { title: 'Select Option' } 
    },
    { 
      path: 'date-input', 
      component: DateInputShowcaseComponent, 
      data: { title: 'Date Input' } 
    },
    { 
      path: 'text-input', 
      component: TextInputShowcaseComponent, 
      data: { title: 'Text Input' } 
    },
    { 
      path: 'textareas-input', 
      component: TextareasInputShowcaseComponent, 
      data: { title: 'Textareas Input' } 
    },
    { 
      path: 'card', 
      component: CardShowcaseComponent, 
      data: { title: 'Card' } 
    },
    { 
      path: 'radio-input', 
      component: RadioInputShowcaseComponent, 
      data: { title: 'Radio Input' } 
    },
    { 
      path: 'menu', 
      component: MenuShowcaseComponent, 
      data: { title: 'Menu' } 
    },
    { 
      path: 'checkbox-input', 
      component: CheckboxInputShowcaseComponent, 
      data: { title: 'Checkbox Input' } 
    },
    { 
      path: 'button-toggle', 
      component: ButtonToggleShowcaseComponent, 
      data: { title: 'Button Toggle' } 
    },
    { 
      path: 'chip-option', 
      component: ChipOptionShowcaseComponent, 
      data: { title: 'Chip Option' } 
    },
    { 
      path: 'slide-toggle', 
      component: SlideToggleShowcaseComponent, 
      data: { title: 'Slide Toggle' } 
    },
    { 
      path: 'tabs', 
      component: TabsShowcaseComponent, 
      data: { title: 'Tabs' } 
    },
    { 
      path: 'dialog-modal', 
      component: DialogModalShowcaseComponent, 
      data: { title: 'Dialog Modal' } 
    },
    { 
      path: 'snack-bar-position', 
      component: SnackBarPositionShowcaseComponent, 
      data: { title: 'Snack Bar Position' } 
    },
    { 
      path: 'button-stroked', 
      component: ButtonStrokedShowcaseComponent, 
      data: { title: 'Button Stroked' } 
    },
    { 
      path: 'button-raised', 
      component: ButtonRaisedShowcaseComponent, 
      data: { title: 'Button Raised' } 
    },
    { 
      path: 'button-flat', 
      component: ButtonFlatShowcaseComponent, 
      data: { title: 'Button Flat' } 
    },
    { 
      path: 'button-basic', 
      component: ButtonBasicShowcaseComponent, 
      data: { title: 'Button Basic' } 
    },
    { 
      path: 'button-cancat', 
      component: ButtonCancatShowcaseComponent, 
      data: { title: 'Button Cancat' } 
    },
    { 
      path: 'button-fab', 
      component: ButtonFabShowcaseComponent, 
      data: { title: 'Button FAB' } 
    },
    { 
      path: 'button-icon', 
      component: ButtonIconShowcaseComponent, 
      data: { title: 'Button Icon' } 
    },
    { 
      path: 'button-icon-spinner', 
      component: ButtonIconSpinnerShowcaseComponent, 
      data: { title: 'Button Icon Spinner' } 
    },
    { 
      path: 'slider', 
      component: SliderShowcaseComponent, 
      data: { title: 'Slider' } 
    },
    { 
      path: 'icon', 
      component: IconShowcaseComponent, 
      data: { title: 'Icon' } 
    },
    { 
      path: 'spinner', 
      component: SpinnerShowcaseComponent, 
      data: { title: 'Spinner' } 
    },
    { 
      path: 'progress-bar', 
      component: ProgressBarShowcaseComponent,
      data: { title: 'Progress Bar' } 
    },
    { 
      path: 'text', 
      component: TextShowcaseComponent,
      data: { title: 'Text' } 
    },
    { 
      path: 'expansion-panel', 
      component: ExpansionPanelShowcaseComponent,
      data: { title: 'Expansion Panel' } 
    },
    { 
      path: 'paginator', 
      component: PaginatorShowcaseComponent,
      data: { title: 'Paginator' } 
    },
    { 
      path: 'navbar-itens', 
      component: NavBarItensShowcaseComponent,
      data: { title: 'NavBar Itens' } 
    },
    { 
      path: 'snackbar-alert-static', 
      component: SnackBarAlertStaticShowcaseComponent,
      data: { title: 'SnackBar Alert Static' } 
    },
];

export const ShowcaseComponentRoutes = RouterModule.forChild(routes);