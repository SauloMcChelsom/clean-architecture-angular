import { Injectable, Type, ViewContainerRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private drawer?: MatSidenav;
  private drawerContent?: ViewContainerRef;

  setDrawer(drawer: MatSidenav, drawerContent: ViewContainerRef) {
    this.drawer = drawer;
    this.drawerContent = drawerContent;
  }

  open(component: Type<any>, data: { [key: string]: any } = {}) {
    if (this.drawer && this.drawerContent) {
      this.drawer.open();
      this.drawerContent.clear();
      const componentRef = this.drawerContent.createComponent(component);
      Object.assign(componentRef.instance, data);
    } else {
      console.error("Drawer ou DrawerContent não foram inicializados.");
    }
  }

  close() {
    this.drawer?.close();
    this.drawerContent?.clear();
  }
}