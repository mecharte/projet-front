import { Component, OnInit } from '@angular/core';
import {profilRdv, rdv} from "../rdv";
import {ApiRdvBrokerService} from '../api-rdv-broker.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-ajouter-pers',
  templateUrl: './ajouter-pers.component.html',
  styleUrls: ['./ajouter-pers.component.css']
})
export class AjouterPersComponent implements OnInit {
  formulairePers : profilRdv;
  constructor(private apiRdvBrokerService: ApiRdvBrokerService,
              private httpClient: HttpClient) {
    this.formulairePers = new profilRdv();
  }
  ngOnInit(): void {
    this.formulairePers = new profilRdv();}
  //methode qui permet d'ajouter une personne a la listePers
  //formulairePers => objet personne obtenue avec le formulaire d'inscription
  validePers(){
    this.apiRdvBrokerService.ajouterPers(this.formulairePers);
    window.location.reload ();
  }
}
