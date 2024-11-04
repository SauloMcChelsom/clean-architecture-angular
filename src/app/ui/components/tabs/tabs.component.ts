import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TabModel } from './models';

@Component({
  selector: 'Tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [MatTabsModule, CommonModule],
})
export class TabsComponent {
  @Input() tabs: TabModel[] = [];
  @Input() defaultIndex: number = 0;
  
  @Output() currentTabChange = new EventEmitter<number>(); 

  loadedTabs: boolean[] = [];
  currentIndex: number = 0;
  initialState!: { index: number; loadedTabs: boolean[] };

  ngOnInit() {
    this.currentIndex = this.defaultIndex;
    this.loadedTabs = Array(this.tabs.length).fill(false);
    this.loadedTabs[this.defaultIndex] = true;
    this.saveInitialState();
  }

  onTabChange(index: number): void {
    if (!this.loadedTabs[index]) {
      this.loadedTabs[index] = true;
    }
    this.currentIndex = index;
    this.currentTabChange.emit(this.currentIndex); 
  }

  saveInitialState(): void {
    this.initialState = {
      index: this.defaultIndex,
      loadedTabs: [...this.loadedTabs],
    };
  }

  resetToInitialState(): void {
    this.currentIndex = this.initialState.index;
    this.loadedTabs = [...this.initialState.loadedTabs];
    this.currentTabChange.emit(this.currentIndex);
  }
}