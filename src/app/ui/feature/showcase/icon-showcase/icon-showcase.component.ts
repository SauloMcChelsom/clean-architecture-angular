import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IconComponent } from 'src/app/ui/components/icon/icon.component';
import { IconSizes } from 'src/app/ui/components/icon/models';


@Component({
  selector: 'app-icon-showcase',
  templateUrl: './icon-showcase.component.html',
  styleUrls: ['./icon-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IconComponent
  ]
})
export class IconShowcaseComponent implements OnInit {
  size: IconSizes = IconSizes.MEDIUM;

  constructor() { }

  ngOnInit() {
  }

}
