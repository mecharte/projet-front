export class Creneau{
  id:number;
  heureD:string
  heureF:string
  date:string;
  numOK:number;
  numKO:number;
  constructor()
  {
    this.id=0;
    this.heureD="";
    this.heureF="";
    this.date="";
    this.numOK=0;
    this.numKO=0;
  }
}
export class rdv {

  id : number;
  titre : string;
  description: string;
  listeCreneaux: Creneau [];


  constructor() {
    this.id =0;
    this.titre ="";
    this.description ="";
    this.listeCreneaux= [];
  }
}

  export class profilRdv {
    id : number;
    nom: string;
    prenom: string;
    listeParcitipe: rdv [];

    constructor() {
      this.id=0;
      this.nom = "";
      this.prenom = "";
      this.listeParcitipe=[];
    }
  }

