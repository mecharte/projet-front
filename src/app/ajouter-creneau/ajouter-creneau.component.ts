import { Component, OnInit } from '@angular/core';
import {Creneau} from "../rdv";
import {ApiRdvBrokerService} from "../api-rdv-broker.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajouter-creneau',
  templateUrl: './ajouter-creneau.component.html',
  styleUrls: ['./ajouter-creneau.component.css']
})
export class AjouterCreneauComponent implements OnInit {
  creneau : Creneau;

  constructor(private apiRdvBrokerService: ApiRdvBrokerService, private routeactive: ActivatedRoute) {
    this.creneau= new Creneau();
  }

  ngOnInit(): void {
  }
  //ajouter un creneau dans un rendez-vous
  // id => correspondt a id rendez-vous
  //creneau correspond au creneau a renseigne
  ajouterCreneau(){
    let id = this.routeactive.snapshot.params['id'];
    this.apiRdvBrokerService.ajouterCreneau(this.creneau,id);
    this.creneau = new Creneau();
  }

}
