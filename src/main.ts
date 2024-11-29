import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/ui/app.module';
import { environment } from './assets/environments/enviroment';
import { enableProdMode } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));