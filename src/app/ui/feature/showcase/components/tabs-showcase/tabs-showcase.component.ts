import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { TabsComponent } from 'src/app/ui/components/tabs/tabs.component';
import { TabOneComponent } from './Tab.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tabs-showcase',
  templateUrl: './tabs-showcase.component.html',
  styleUrls: ['./tabs-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TabsComponent,
    TabOneComponent,
    MatButtonModule
  ]
})
export class TabsShowcaseComponent {
  codes = [
    `
    import { TabsComponent } from 'src/app/ui/components/tabs/tabs.component';
    import { TabOneComponent } from './Tab.component';
    `,
    `
    <Tabs 
      [defaultIndex]="currentTab"
      [tabs]="[
        { label: 'US', content: tab1Content, disabled: false },
        { label: 'BR', content: tab2Content, disabled: false },
        { label: 'CO', content: tab3Content, disabled: false }
      ]"
      (currentTabChange)="onCurrentTabChange($event)">
    </Tabs>
    `,
    `
    <ng-template matTabContent #tab1Content>
      <p>hello world</p>
    </ng-template>
    
    <ng-template matTabContent #tab2Content>
      <p>Olá Mundo</p>
    </ng-template>
    
    <ng-template matTabContent #tab3Content>
      <app-tab-one></app-tab-one>
    </ng-template>
    `,
    `
    onCurrentTabChange($event: number) {
      this.currentTab = $event;
    }
    `,
  ];
  currentTab = 1

  @ViewChild(TabsComponent) component!: TabsComponent;

  onCurrentTabChange($event: number) {
    this.currentTab = $event;
  }

  reset() {
    this.component.resetToInitialState()
  }
}