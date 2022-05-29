import { Component, OnInit } from '@angular/core';
import {rdv} from "../rdv";


@Component({
  selector: 'app-recherche-rdv',
  templateUrl: './recherche-rdv.component.html',
  styleUrls: ['./recherche-rdv.component.css'],
})
export class RechercheRdvComponent implements OnInit {

  id : number;
  constructor() {
    this.id = 0;
  }

  ngOnInit(): void {
  }

}
