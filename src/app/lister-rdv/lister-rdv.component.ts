import { Component, OnInit } from '@angular/core';
import {rdv} from "../rdv";
import {ApiRdvBrokerService} from "../api-rdv-broker.service";


@Component({
  selector: 'app-lister-rdv',
  templateUrl: './lister-rdv.component.html',
  styleUrls: ['./lister-rdv.component.css']
})

export class ListerRdvComponent implements OnInit {


  liste : rdv[] = [];

  constructor(private apiRdvBrokerService : ApiRdvBrokerService) {

  }

  ngOnInit(): void {

  this.apiRdvBrokerService.recupererliste().subscribe((data)=>{this.liste = data});}

}
