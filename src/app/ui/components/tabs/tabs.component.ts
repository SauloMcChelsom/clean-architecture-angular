
import { DatePipe } from '@angular/common';
import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'Tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [MatTabsModule, DatePipe],
})
export class TabsComponent {
  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    console.log(index)
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }
}