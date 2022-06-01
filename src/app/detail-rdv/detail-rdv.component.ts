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
  isCloturer = false;
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
  //fonction qui permet d'ajouter dans la listeParticipe un rdv présent dans la liste
  //listeEvtParticipe => liste des rdv pour lequel le profil participe
  //this.detail => correspond a un objet rdv
  ajouterDansListeParticipe()
  {
    let pos=0;
    this.listeEvtParcitipe[pos]=this.detail;
    pos++;
    this.apiRdvBrokerService.ajouterDansListeParticipe(this.detail);
  }
  //fonction qui permet d'ajouter un + au bouton ok
  //this.detail => correspond au rdv
  //this.detail.listeCreneaux => liste des creneaux du rdv
  //positionCreneau => correspond au creneau pour lequel on vas ajouter un + au bouton ok
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

  //fonction qui permet d'ajouter un + au bouton ko
  //this.detail => correspond au rdv
  //this.detail.listeCreneaux => liste des creneaux du rdv
  //positionCreneau => correspond au creneau pour lequel on vas ajouter un + au bouton ko
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

  //fonction qui permet de cloturer un rdv ce qui bloque le creneau qui possede le plus de ok des participants
  //this.isCloturer => permet de savoir si le bouton a ete clique
  //nbOKMAX => correspond au nombreMax de personne ayant vote pour un creneau d'un rdv
  //positionNBokMAX => correspond a la position dans la liste du creneau qui possede le plus de ok d'un rdv
  //listeCloturer => correspond a la nouvelle liste qui possedera que le creneau qui possede le plus de ok
  //this.detail.listeCreneaux => correspond a la liste du creneau
  cloturerRDV()
  {
    this.isCloturer=true;
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
  //fonction qui permet d'afficher le formulaire de creaneau
  //this.formCreneauCache => variable qui permet de savoir si le creneau est ouvert ou pas
  //this.isCloturer => permet de savoir si le creneau est cloturer pour ne plus ajouter de creneau
  ouvrirFormCreneau(){
    if(this.formCreneauCache || this.isCloturer){
      this.formCreneauCache = false;
      this.ngOnInit();
    }
    else{
      this.formCreneauCache = true;
    }
  }

}




