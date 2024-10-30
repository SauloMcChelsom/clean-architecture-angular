import { MatMenuItem } from "@angular/material/menu";

export interface MenuModel {
    label: string;
    icon?: string;
    disabled?: boolean;
    children?: MatMenuItem[];
    cod?: string
}