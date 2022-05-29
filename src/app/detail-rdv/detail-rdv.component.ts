import { Component, OnInit } from '@angular/core';
import {rdv,Creneau} from "../rdv";
import {ApiRdvBrokerService} from '../api-rdv-broker.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import "bootstrap-icons/font/bootstrap-icons.css";

@Component({
  selector: 'app-detail-rdv',
  templateUrl: './detail-rdv.component.html',
  styleUrls: ['./detail-rdv.component.css']
})

export class DetailRdvComponent implements OnInit {

  detail : rdv;
  formCreneauCache = false;
  listeEvtParcitipe : rdv[];
  constructor(private apiRdvBrokerService: ApiRdvBrokerService,
              private httpClient: HttpClient,
              private router: Router,
              private routeactive: ActivatedRoute) {
    this.detail = new rdv();
    this.listeEvtParcitipe=[];
  }

  ngOnInit(): void {
    let id = this.routeactive.snapshot.params['id'];
    let detail$ = this.apiRdvBrokerService.getRdv(id).subscribe((data) => {
      this.detail = data;
      detail$.unsubscribe();
    });
  }
  ajouterDansListeParticipe()
  {
    let pos=0;
    let i=0;
    while(this.detail.listeCreneaux[i].numOK<=0)
    {
      i++;
    }
    this.listeEvtParcitipe[pos]=this.detail;
    pos++;
    this.apiRdvBrokerService.ajouterDansListeParticipe(this.detail.id);
  }
  ajouterOK(creneau : Creneau){
    let positionCreneau = -1;
    //recuperation de la position du creneau dans la liste
    for(let i =0; i < this.detail.listeCreneaux.length; i++){
      if (this.detail.listeCreneaux[i].id == creneau.id)
      {
        positionCreneau = i;
        break;
      }
    }
  this.detail.listeCreneaux[positionCreneau].numOK= this.detail.listeCreneaux[positionCreneau].numOK+1;
  this.apiRdvBrokerService.ajouterOK(creneau, this.detail.id)
  }

  ajouterKO(creneau : Creneau){
    let positionCreneau = -1;
    //recuperation de la position du creneau dans la liste
    for(let i =0; i < this.detail.listeCreneaux.length; i++){
      if (this.detail.listeCreneaux[i].id == creneau.id)
      {
        positionCreneau = i;
        break;
      }
    }
    this.detail.listeCreneaux[positionCreneau].numKO= this.detail.listeCreneaux[positionCreneau].numKO+1;
  this.apiRdvBrokerService.ajouterKO(creneau, this.detail.id)
  }

  cloturerRDV()
  {
    let nbOKMAX=0;
    let positionNBokMAX=-1;
    //recuperer le nb participants le plus grands
    for(let i =0;i<this.detail.listeCreneaux.length;i++)
    {
      if(this.detail.listeCreneaux[i].numOK>nbOKMAX)
      {
        nbOKMAX = this.detail.listeCreneaux[i].numOK;
        positionNBokMAX=i;
      }
    }
    //ajout du creneaux dans une nouvelle liste
    let listeCloturer=[];
    listeCloturer[0]=this.detail.listeCreneaux[positionNBokMAX];
    //ajout de cette liste dans la liste du rdv
    this.detail.listeCreneaux=listeCloturer;
    this.apiRdvBrokerService.cloturerRDV(this.detail,this.detail.id);
  }

  ouvrirFormCreneau(){
    if(this.formCreneauCache){
      this.formCreneauCache = false;
      this.ngOnInit();
    }
    else{
      this.formCreneauCache = true;
    }
  }

}




