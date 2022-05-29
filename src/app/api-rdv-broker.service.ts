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

  public recupererListeParticipe() : Observable<rdv[]>
  {
    return this.httpClient.get<rdv[]>(this.url+"listeParticipe")
  }

  public recupererliste() : Observable<rdv[]>{
    return this.httpClient.get<rdv[]>(this.url+ "rdv");
  }

  public recupererlistePers(): Observable<profilRdv[]> {
    return this.httpClient.get<profilRdv[]>(this.url + "pers");
  }

  public getRdv(id: number) : Observable<rdv>{
    return this.httpClient.get<rdv>(this.url + 'rdv/' + id);
  }

  public getPers(idP: number): Observable<profilRdv> {
    return this.httpClient.get<profilRdv>(this.url + "pers/" + idP);
  }

  public getCreneau() : Observable<Creneau>{
    return this.httpClient.get<Creneau>(this.url + 'ajouter/');
  }

  public ajouterOK(creneau: Creneau, idRdv : number){
    this.httpClient.post<Creneau>(this.url+'rdv/ajouterOK/'+idRdv, creneau)
      .subscribe(
        (response)=>{console.log(response);}
        , (error)=>{console.log('Erreur Ajouter OK')}
      )
  }

  public ajouterKO(creneau: Creneau, idRdv : number){
    this.httpClient.post<Creneau>(this.url+'rdv/ajouterKO/'+idRdv, creneau)
      .subscribe(
        (response)=>{console.log(response);}
        , (error)=>{console.log('Erreur Ajouter KO')}
      )
  }

  public ajouterCreneau(creneau: Creneau, id: number)
  {
    this.httpClient.post<Creneau>(this.url+'rdv/'+id+'/ajouterCreneau', creneau)
      .subscribe(
        (response)=>{console.log(response);}
        , (error)=>{console.log('Erreur Ajouter creneau')}
      )
  }

  public ajouterDansListeParticipe(id:number)
  {
    this.httpClient.post(this.url+'listeParticipe/'+id,id)
      .subscribe(
        (response)=>{console.log(response);}
        , (error)=>{console.log('Erreur Ajouter liste participe')}
      )
  }

  public cloturerRDV(rdv:rdv, idRDV: number)
  {
    this.httpClient.post<rdv>(this.url+'rdv/'+idRDV+'/cloturer', rdv)
      .subscribe(
        (response)=>{console.log(response);}
        , (error)=>{console.log('Erreur Ajouter creneau')}
      )
  }

  public ajouterRdv(Rdv : rdv){
    // @ts-ignore
    this.httpClient.post<rdv>(this.url + 'rdv' , Rdv)
      .subscribe(
        (response)=>{console.log(response);}
      , (error)=>{console.log('Erreur Ajouter rdv')}
      )
  }
  public ajouterPers(Pers: profilRdv) {
    // @ts-ignore
    this.httpClient.post<profilRdv>(this.url + "pers/", Pers)
      .subscribe(
        (response) => {
          console.log(response);
        }
        , (error) => {
          console.log('Erreur Ajouter')
        }
      )
  }
}
