import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {profilRdv, rdv,Creneau} from "./rdv";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiRdvBrokerService {

  private url='http://localhost:3000/api/';

  constructor(private httpClient : HttpClient) { }

  //fonction qui permet de recuperer la listeParticipe
  //this.url => correspond a l'url de base utilise
  public recupererListeParticipe() : Observable<rdv[]>
  {
    return this.httpClient.get<rdv[]>(this.url+"listeParticipe")
  }

  //fonction qui permet de recuperer la liste recupererListe
  //this.url => correspond a l'url de base utilise
  public recupererliste() : Observable<rdv[]>{
    return this.httpClient.get<rdv[]>(this.url+ "rdv");
  }

  //fonction qui permet de recuperer la liste recupererListPers
  //this.url => correspond a l'url de base utilise
  public recupererlistePers(): Observable<profilRdv[]> {
    return this.httpClient.get<profilRdv[]>(this.url + "pers");
  }

  //fonction qui permet de recuperer un rendez-vous
  //this.url => correspond a l'url de base utilise
  public getRdv(id: number) : Observable<rdv>{
    return this.httpClient.get<rdv>(this.url + 'rdv/' + id);
  }

  //fonction qui permet de recuperer une personne
  //this.url => correspond a l'url de base utilise
  public getPers(idP: number): Observable<profilRdv> {
    return this.httpClient.get<profilRdv>(this.url + "pers/" + idP);
  }

  //fonction qui permet de recuperer un creneau
  //this.url => correspond a l'url de base utilise
  public getCreneau() : Observable<Creneau>{
    return this.httpClient.get<Creneau>(this.url + 'ajouter/');
  }

  //fonction qui permet d'ajouter un ok a un creneau de la liste Creneau d'un rendez-vous choisi
  //this.url => correspond a l'url de base utilise
  public ajouterOK(creneau: Creneau, idRdv : number){
    this.httpClient.post<Creneau>(this.url+'rdv/ajouterOK/'+idRdv, creneau)
      .subscribe(
        (response)=>{console.log(response);}
        , (error)=>{console.log('Erreur Ajouter OK')}
      )
  }

  //fonction qui permet d'ajouter un ko a un creneau de la liste Creneau d'un rendez-vous choisi
  //this.url => correspond a l'url de base utilise
  public ajouterKO(creneau: Creneau, idRdv : number){
    this.httpClient.post<Creneau>(this.url+'rdv/ajouterKO/'+idRdv, creneau)
      .subscribe(
        (response)=>{console.log(response);}
        , (error)=>{console.log('Erreur Ajouter KO')}
      )
  }

  //fonction qui permet d'ajouter un creneau dans la liste Creneau d'un rendez-vous choisi
  //this.url => correspond a l'url de base utilise
  public ajouterCreneau(creneau: Creneau, id: number)
  {
    this.httpClient.post<Creneau>(this.url+'rdv/'+id+'/ajouterCreneau', creneau)
      .subscribe(
        (response)=>{console.log(response);}
        , (error)=>{console.log('Erreur Ajouter creneau')}
      )
  }

  //fonction qui permet d'ajouter un rdv dans la liste listeParticipe
  //this.url => correspond a l'url de base utilise
  public ajouterDansListeParticipe(Rdv:rdv)
  {
    this.httpClient.post(this.url+'listeParticipe/',rdv)
      .subscribe(
        (response)=>{console.log(response);}
        , (error)=>{console.log('Erreur Ajouter liste participe')}
      )
  }
  //fonction qui permet d'ajouter un rdv dans la liste liste
  //this.url => correspond a l'url de base utilise
  public ajouterRdv(Rdv : rdv){
    // @ts-ignore
    this.httpClient.post<rdv>(this.url + 'rdv' , Rdv)
      .subscribe(
        (response)=>{console.log(response);}
        , (error)=>{console.log('Erreur Ajouter rdv')}
      )
  }
  //fonction qui permet de cloturer un evenement choisi
  //this.url => correspond a l'url de base utilise
  public cloturerRDV(rdv:rdv, idRDV: number)
  {
    this.httpClient.post<rdv>(this.url+'rdv/'+idRDV+'/cloturer', rdv)
      .subscribe(
        (response)=>{console.log(response);}
        , (error)=>{console.log('Erreur Ajouter creneau')}
      )
  }
  //fonction qui permet d'ajouter une personne dans la liste listePers d'un rendez-vous choisi
  //this.url => correspond a l'url de base utilise
  public ajouterPers(Pers: profilRdv) {
    // @ts-ignore
    this.httpClient.post<profilRdv>(this.url + "pers/", Pers)
      .subscribe(
        (response) => {
          console.log(response);
        }
        , (error) => {
          console.log('Erreur Ajouter PERS')
        }
      )
  }
}
