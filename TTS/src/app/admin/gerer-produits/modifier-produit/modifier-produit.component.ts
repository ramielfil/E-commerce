import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import { response } from 'express';
import { produit } from 'src/app/model/produit';
import { ProduitService } from 'src/app/services/produit.service';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators }
  from '@angular/forms';
import { marqueServiceService } from 'src/app/services/marque.service';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.css']
})
export class ModifierProduitComponent {
  constructor(private router: Router , public service_produit : ProduitService,public servicemarque : marqueServiceService,public servicecategorie : CategorieService ){}

  ngOnInit():void{
      this.servicemarque.GetAll().subscribe((data: any[]) => {
        this.marque = data;
      });
  
      this.servicecategorie.GetAll().subscribe((data: any[]) => {
        this.categorie = data;
      });
    
    this.Getone()
  }
  gotologin(){
    this.router.navigate(["/login"])
  }
  userFile1;
  imgURL1 : any ;
  id : number
  public imagePath;
  public message : string;

  marque: any[];
  categorie: any[];
  produit : any
  validname: boolean = true; // Initialisez-le à false par défaut
  validprenom: boolean = true;
  validemail: boolean = true;
  validnumtel: boolean = true;
  validprix: boolean = true;
  validquantite: boolean = true;
  validcouleur: boolean = true;
  validDesc: boolean = true;

  selectedFile: File | null = null;
  emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
}


save_modif(produit: produit) {
  this.service_produit.update(produit).subscribe(
    data => {
      alert(data);
    }
  );
  window.location.reload();
}


checkValidName() {
  const nomInput = <HTMLInputElement>document.getElementById("nom");
  const nomValue = nomInput.value;
  this.validname = nomValue!== '';
}
checkValidDesc() {
  const descInput = <HTMLInputElement>document.getElementById("desc_produit");
  const descValue = descInput.value;
  this.validDesc = descValue!== '';
}
checkValidCouleur() {
  const couleurInput = <HTMLInputElement>document.getElementById("couleur");
  const couleurValue = couleurInput.value;
  this.validcouleur = couleurValue!== '';
}
  checkValidPrix() {
    const prixInput = <HTMLInputElement>document.getElementById("prix");
    const prixValue = prixInput.value;
    this.validprix = prixValue!== '';
  }
  checkValidquantite() {
    const quantitueInput = <HTMLInputElement>document.getElementById("quantitue");
    const quantitueValue = quantitueInput.value;
    this.validquantite = quantitueValue!== '';
  }
  
  Getone()
  {
    this.id = Number(localStorage.getItem("ref_produit"))
    this.service_produit.GetOne(this.id).subscribe(
      data =>
      {
        console.log(data)
        this.produit = data
      }
    )
  }
  
  // new_nom_produit : string
  // new_desc_produit : string
  // new_prix_produit : string
  // new_quantitue_produit : string
  // new_qualite_camera : string
  // new_stockage : string
  // new_garantie : string
  // new_couleur: string
  // new_taille_ecran : string
  // new_ram : string
  // new_sim : string
  // new_processeur : string
  // new_graphique : string

  // save_modif(produit : produit)
  // {console.log("save_modif")
  //   this.new_nom_produit = (<HTMLInputElement>document.getElementById("nom_produit")).value;
  //   produit.nom_produit=this.new_nom_produit

  //   this.new_desc_produit = (<HTMLInputElement>document.getElementById("desc_produit")).value;
  //   produit.desc_produit=this.new_desc_produit
  //   this.new_prix_produit = (<HTMLInputElement>document.getElementById("prix_produit")).value;
  //   produit.prix_produit=this.new_prix_produit
    
  //   this.new_quantitue_produit = (<HTMLInputElement>document.getElementById("quantitue_produit")).value;
  //   produit.quantitue_produit=this.new_quantitue_produit
  //   this.new_qualite_camera = (<HTMLInputElement>document.getElementById("qualite_camera")).value;
  //   produit.qualite_camera=this.new_qualite_camera

  //   this.new_stockage = (<HTMLInputElement>document.getElementById("stockage")).value;
  //   produit.stockage=this.new_stockage

  //   this.new_garantie = (<HTMLInputElement>document.getElementById("garantie")).value;
  //   produit.garantie=this.new_garantie

  //   this.new_couleur = (<HTMLInputElement>document.getElementById("couleur")).value;
  //   produit.couleur=this.new_couleur
    
  //   this.new_taille_ecran = (<HTMLInputElement>document.getElementById("taille_ecran")).value;
  //   produit.taille_ecran=this.new_taille_ecran
    
  //   this.new_ram = (<HTMLInputElement>document.getElementById("ram")).value;
  //   produit.ram=this.new_ram

  //   this.new_sim = (<HTMLInputElement>document.getElementById("sim")).value;
  //   produit.sim=this.new_sim
  //   this.new_processeur = (<HTMLInputElement>document.getElementById("processeur")).value;
  //   produit.processeur=this.new_processeur
  //   this.new_graphique = (<HTMLInputElement>document.getElementById("graphique")).value;
  //   produit.graphique=this.new_graphique

  //   console.log(produit);
  //   this.service_produit.update(produit).subscribe(
  //     data => {
  //       alert(data)
  //     }
  //   )

  // }
  onSelectFile1(event){
    if (event.target.files.length >0){
      const file =event.target.files[0];
      this.userFile1 = file;
      //this.f['profil'].setValue(File);
  
      var mimeType = event.target.files[0].type;
      if(mimeType.match(/image\/*/) == null){
        this.message = "only image are supported ";
        return;
      }
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) =>{this.imgURL1 = reader.result ; }
      
    }
  }


}
