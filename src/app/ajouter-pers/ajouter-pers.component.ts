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
  validePers(){
    this.apiRdvBrokerService.ajouterPers(this.formulairePers);
  }
}
