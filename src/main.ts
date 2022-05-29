import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {Routes} from "@angular/router";
import {AjouterRdvComponent} from "./app/ajouter-rdv/ajouter-rdv.component";
import {DetailRdvComponent} from "./app/detail-rdv/detail-rdv.component";
import {ListerRdvComponent} from "./app/lister-rdv/lister-rdv.component";
import {RechercheRdvComponent} from "./app/recherche-rdv/recherche-rdv.component";


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
