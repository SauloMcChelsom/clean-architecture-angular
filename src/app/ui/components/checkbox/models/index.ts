import { ThemePalette } from "@angular/material/core";

export interface Task {
    name: string;
    color: ThemePalette;
    disabled: boolean;
    cod: string;
    checked: boolean;
  }