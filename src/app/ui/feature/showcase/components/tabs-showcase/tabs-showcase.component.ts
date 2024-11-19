import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { TabsComponent } from 'src/app/ui/components/tabs/tabs.component';
import { TabOneComponent } from './Tab.component';

@Component({
  selector: 'app-tabs-showcase',
  templateUrl: './tabs-showcase.component.html',
  styleUrls: ['./tabs-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TabsComponent,
    TabOneComponent
  ]
})
export class TabsShowcaseComponent {

  currentTab = 1

  @ViewChild(TabsComponent) component!: TabsComponent;

  onCurrentTabChange($event: number) {
    this.currentTab = $event;
  }

  reset() {
    this.component.resetToInitialState()
  }
}