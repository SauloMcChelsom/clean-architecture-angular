import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ButtonCancatComponent } from '../../components/button-cancat/button-cancat.component';
import { CardComponent } from '../../components/card/card.component';
import { TextCardComponent } from '../../components/card/text/text.component';
import { TimestampCardComponent } from '../../components/card/timestamp/timestamp.component';
import { TitleCardComponent } from '../../components/card/title/title.component';
import { TextInputConfig } from '../../components/input/enuns/dynamic-date-input.types';
import { InputComponent } from '../../components/input/input.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { SelectionModel, SelectOptionComponent } from '../../components/select-option/select-option.component';
import { ScoreboardColor, SnackBarComponent, SnackBarModel } from '../../components/snack-bar/snack-bar.component';
import { Flex, Tag, TextComponent, Title } from '../../components/text/text.component';
import { TextareaInputConfig } from '../../components/textarea/enuns/dynamic-date-input.types';
import { TextareaComponent } from '../../components/textarea/textarea.component';
import { DateInputModule } from './date-input/date-input.module';
import { RadioComponent } from '../../components/radio/radio.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { CheckboxComponent } from '../../components/checkbox/checkbox.component';
import { ButtonToggleComponent } from '../../components/button-toggle/button-toggle.component';
import { ChipOptionComponent } from '../../components/chip-option/chip-option.component';
import { SpinnerProgressComponent } from '../../components/spinner-progress/spinner-progress.component';
import { SlideToggleComponent } from '../../components/slide-toggle/slide-toggle.component';
import { BottomSheetComponent } from '../../components/bottom-sheet/bottom-sheet.component';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { ExpansionPanelComponent } from '../../components/expansion-panel/expansion-panel.component';
import { IconComponent } from '../../components/icon/icon.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { DrawerComponent } from '../../components/drawer/drawer.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { SnackBarPositionComponent } from '../../components/snack-bar-position/snack-bar-position.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { ButtonFabComponent } from '../../components/button-fab/button-fab.component';
import { ButtonIconComponent } from '../../components/button-icon/button-icon.component';
import { ButtonIconSpinnerComponent } from '../../components/button-icon-spinner/button-icon-spinner.component';
import { ButtonBasicComponent } from '../../components/button-basic/button-basic.component';
import { ButtonRaisedComponent } from '../../components/button-raised/button-raised.component';
import { ButtonStrokedComponent } from '../../components/button-stroked/button-stroked.component';
import { ButtonFlatComponent } from '../../components/button-flat/button-flat.component';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SelectOptionComponent,
    SnackBarComponent,
    TextareaComponent,
    InputComponent,
    NavBarComponent,
    TextComponent,
    ButtonCancatComponent,
    MatFormFieldModule,
    MatCardModule,
    CardComponent,
    TitleCardComponent,
    TimestampCardComponent,
    TextCardComponent,
    DateInputModule,
    RadioComponent,
    MenuComponent,
    CheckboxComponent,
    ButtonToggleComponent,
    ChipOptionComponent,
    SpinnerProgressComponent,
    SlideToggleComponent,
    BottomSheetComponent,
    DialogComponent,
    ExpansionPanelComponent,
    IconComponent,
    PaginatorComponent,
    ProgressBarComponent,
    SpinnerComponent,
    DrawerComponent,
    SliderComponent,
    SnackBarPositionComponent,
    TabsComponent,
    ButtonCancatComponent,
    ButtonFabComponent,
    ButtonIconComponent,
    ButtonIconSpinnerComponent,
    NavBarComponent,
    ButtonBasicComponent,
    ButtonRaisedComponent,
    ButtonStrokedComponent,
    ButtonFlatComponent
  ]
})
export class ShowCaseComponent implements OnInit {

  selectEmpy = 'Nenhum Índice Selecionado';
  default = '';
  selections: SelectionModel[] = [
    { description: 'Portuguese (Brazil)', cod: 'pt-BR' },
    { description: 'English (United States)', cod: 'en-US' },
    { description: 'Spanish (Colombia)', cod: 'es-CO' },
  ];
  public config_title!: TextInputConfig;
  public config_description!: TextareaInputConfig;
  protected spinner: boolean = false;
  Tag=Tag;
  Flex=Flex;
  Title=Title;
  protected openSnackBar!: SnackBarModel;
  protected closeSnackBar!: any;
  constructor() { }

  ngOnInit() {
    this.createInputText();
    this.createInputTextarea();
  }

  createInputText(): void {
    this.config_title = {
      formControl: new FormControl<string | undefined>("", [Validators.required, Validators.minLength(5)]),
      title: 'Titulo',
      placeholder: 'Informe o titulo do seu note',
      erroFill: "O nome deve ter pelo menos 5 caracteres",
      erroRequired: "Preenchimento obrigatório"
    };
  }

  createInputTextarea(): void {
    this.config_description = {
      formControl: new FormControl<string | undefined>("", [Validators.required, Validators.minLength(5)]),
      placeholder: "Escreva aqui tudo que precisa...",
      erroFill: "O nome deve ter pelo menos {{NUM}} caracteres",
      erroRequired: "Preenchimento obrigatório"
    };
  }

  add(){
    this.spinner = true;
  }

  errSnackBar() {
    this.openSnackBar = {
      mensagem:  "Error em processar",
      typeScoreboardColor: ScoreboardColor.WARN
    }
  }

  sucsessSnackBar() {
    this.openSnackBar = {
      mensagem:  "Parabens voce acertou",
      typeScoreboardColor: ScoreboardColor.SUCCESS
    }
  }
}
