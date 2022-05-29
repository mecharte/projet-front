import { Component, OnInit } from '@angular/core';
import {profilRdv} from "../rdv";
import {ApiRdvBrokerService} from "../api-rdv-broker.service";

@Component({
  selector: 'app-lister-pers',
  templateUrl: './lister-pers.component.html',
  styleUrls: ['./lister-pers.component.css']
})
export class ListerPersComponent implements OnInit {

  listePers : profilRdv[] = [];

  constructor(private apiRdvBrokerService : ApiRdvBrokerService) {

  }

  ngOnInit(): void {

    this.apiRdvBrokerService.recupererlistePers().subscribe((data)=>{this.listePers = data});}
}
