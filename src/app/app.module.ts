import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from './app.component';
import { ListerRdvComponent } from './lister-rdv/lister-rdv.component';
import { DetailRdvComponent } from './detail-rdv/detail-rdv.component';
import { AjouterRdvComponent } from './ajouter-rdv/ajouter-rdv.component';
import {FormsModule} from "@angular/forms";
import { RechercheRdvComponent } from './recherche-rdv/recherche-rdv.component';
import {RouterModule, Routes} from "@angular/router";
import { ProfilRdvComponent } from './profil-rdv/profil-rdv.component';
import { ListerEvtComponent } from './lister-evt/lister-evt.component';
import {HttpClientModule} from "@angular/common/http";
import {ApiRdvBrokerService} from "./api-rdv-broker.service";
import { AjouterCreneauComponent } from './ajouter-creneau/ajouter-creneau.component';
import { AjouterPersComponent } from './ajouter-pers/ajouter-pers.component';
import { ListerPersComponent } from './lister-pers/lister-pers.component';

const appRoutes: Routes = [
  // 1 route par module
  {path: 'ajouter', component: AjouterRdvComponent},
  {path: 'detail/:id', component: DetailRdvComponent},
  {path: 'lister', component: ListerRdvComponent},
  {path: 'rechercher', component: RechercheRdvComponent},
  {path: 'profil', component: ProfilRdvComponent},
  {path: 'listerEvt', component: ListerEvtComponent},
  {path: 'ajouterP', component: AjouterPersComponent},
  {path: 'listerPers', component: ListerPersComponent},
  {path: '', component: AjouterPersComponent},
  {path: '**', component: ListerRdvComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ListerRdvComponent,
    DetailRdvComponent,
    AjouterRdvComponent,
    RechercheRdvComponent,
    ProfilRdvComponent,
    ListerEvtComponent,
    AjouterCreneauComponent,
    AjouterPersComponent,
    ListerPersComponent,
  ],
  imports: [
    BrowserModule, NgbModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [ApiRdvBrokerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
