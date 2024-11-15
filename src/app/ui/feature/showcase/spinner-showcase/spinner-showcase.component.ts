import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IconComponent } from 'src/app/ui/components/icon/icon.component';
import { SpinnerStepsComponent } from 'src/app/ui/components/spinner-steps/spinner-steps.component';

@Component({
  selector: 'app-spinner-showcase',
  templateUrl: './spinner-showcase.component.html',
  styleUrls: ['./spinner-showcase.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    SpinnerStepsComponent,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    NgIf,
    IconComponent
  ]
})
export class SpinnerShowcaseComponent {
  info = [
    {
      title: "Seu Animal de Estimação",
      subtitle: "",
      current: 0
    },
    {
      title: "Escolha seu Animal Favorito",
      subtitle: "Selecione o animal que você ama",
      current: 1
    },
    {
      title: "Nome do seu Animal",
      subtitle: "Informaremos seu nome para todos",
      current: 2
    },
    {
      title: "Localização do Resgate",
      subtitle: "Informe a cidade onde o animal será resgatado",
      current: 3
    },
    {
      title: "Revisão dos Dados",
      subtitle: "Verifique se todos os dados estão corretos",
      current: 4
    },
    {
      title: "Solicitação Concluída!",
      subtitle: "Sua solicitação foi enviada com sucesso. Aguardaremos contato",
      current: 5
    }
  ]
  currentStep = 0;
  totalSteps = 0;
  title="" 
  subtitle="" 

  ngOnInit(){
    this.totalSteps = this.info.length - 1;
    this.title = this.info[this.currentStep].title;
    this.subtitle = this.info[this.currentStep].subtitle;
  }

  increment(){
    if(this.currentStep >= this.totalSteps){
      return;
    }
    this.currentStep++
    this.title = this.info[this.currentStep].title;
    this.subtitle = this.info[this.currentStep].subtitle;
  }

  decrement(){
    if(this.currentStep <= 0){
      return;
    }
    this.currentStep--
    this.title = this.info[this.currentStep].title;
    this.subtitle = this.info[this.currentStep].subtitle;
  }
}
