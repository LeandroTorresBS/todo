//Módulo para trabalhar com produção
import { enableProdMode } from '@angular/core';
//
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//Módulo principal
import { AppModule } from './app/app.module';
//Variáveis de ambiente
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
