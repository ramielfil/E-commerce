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
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent {
  constructor(private router: Router , public service_produit : ProduitService,public servicemarque : marqueServiceService,public servicecategorie : CategorieService ){}
  form_login: any = {};
  quantite : string;
  ngOnInit(): void {
    this.servicemarque.GetAll().subscribe((data: any[]) => {
      this.marque = data;
    });

    this.servicecategorie.GetAll().subscribe((data: any[]) => {
      this.categorie = data;
    });
  }
  gotologin(){
    this.router.navigate(["/login"])
  }
  userFile1;
  marque: any[];
  categorie: any[];

  imgURL1 : any ;


  public imagePath;
  public message : string;
  register(form_login: NgForm) {
    console.log("i am work ");
    console.log(form_login.value);
    this.quantite=form_login.value.quantitue_produit = "0"

    if (form_login.value.non_produit == "") {
      alert("Please fill all the required fields.");
      return;
    } else {

      
      alert("votre produit a été ajouté avec succès!");
      this.service_produit.uploadImage(
        this.userFile1,
        form_login.value.desc_produit,
        form_login.value.nom_produit,
        form_login.value.prix_produit,
        this.quantite,
        form_login.value.stockage,
        form_login.value.garantie,
        form_login.value.couleur,
        form_login.value.taille_ecran,
        form_login.value.ram,
        form_login.value.sim,
        form_login.value.processeur,
        form_login.value.qualite_camera,
        form_login.value.graphique,
        form_login.value.ref_marque, // Pass the value here
        form_login.value.ref_categorie // Pass the value here
      ).subscribe((response: any) => {
        console.log(response);
      });
      
      window.location.reload() // Réinitialiser les champs du formulaire
    }
  }
  
  Modif(id : Number)
  { 
    localStorage.setItem("ref_marque",String(id));
    this.router.navigateByUrl('ajout-produit/caracteristique');
  }
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
