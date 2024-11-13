import { Injectable, Type } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private drawer!: MatSidenav;

  setDrawer(drawer: MatSidenav) {
    this.drawer = drawer;
  }

  open(component: Type<any>, data: any = null): void {
    console.log(this.drawer)
    this.drawer.open();
  }

  close(): void {
    this.drawer.close();
  }
}
