import { Component, OnInit } from '@angular/core';
import {rdv,Creneau} from "../rdv";
import {ApiRdvBrokerService} from '../api-rdv-broker.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-ajouter-rdv',
  templateUrl: './ajouter-rdv.component.html',
  styleUrls: ['./ajouter-rdv.component.css']
})
export class AjouterRdvComponent implements OnInit {

  formulaire : rdv;
  creneau : Creneau;

  constructor(private apiRdvBrokerService: ApiRdvBrokerService,
              private httpClient: HttpClient) {
    this.formulaire = new rdv();
    this.creneau= new Creneau();
  }

  ngOnInit(): void {
      this.formulaire = new rdv();
  }

  validerAjout(){
    //ajouter le creneau au rdv
    this.apiRdvBrokerService.ajouterRdv(this.formulaire);
  }
}
