import { Component, OnInit } from '@angular/core';
import {profilRdv, rdv} from "../rdv";
import {ApiRdvBrokerService} from '../api-rdv-broker.service';
@Component({
  selector: 'app-lister-evt',
  templateUrl: './lister-evt.component.html',
  styleUrls: ['./lister-evt.component.css']
})
export class ListerEvtComponent implements OnInit {
  profil : profilRdv;
  listeEvt : rdv[];
  listeEvtParticipe : rdv[];
  constructor(private apiRdvBrokerService: ApiRdvBrokerService) {
    this.listeEvt = [];
    this.listeEvtParticipe=[];
    this.profil= new profilRdv();
  }

  ngOnInit(): void {
    this.apiRdvBrokerService.recupererliste().subscribe((data)=>{this.listeEvt = data});
    this.apiRdvBrokerService.recupererListeParticipe().subscribe((data)=>{this.listeEvtParticipe = data});
  }
}
