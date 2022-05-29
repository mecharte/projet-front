import { Component, OnInit } from '@angular/core';
import {profilRdv} from "../rdv";

@Component({
  selector: 'app-profil-rdv',
  templateUrl: './profil-rdv.component.html',
  styleUrls: ['./profil-rdv.component.css']
})
export class ProfilRdvComponent implements OnInit {

  formulaire : profilRdv;
  constructor() {
    this.formulaire = new profilRdv();
  }

  ngOnInit(): void {
    this.formulaire = new profilRdv();
  }

}
