import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { produit } from 'src/app/model/produit';
import { CategorieService } from 'src/app/services/categorie.service';
import { marqueServiceService } from 'src/app/services/marque.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-f-modifier-produit',
  templateUrl: './f-modifier-produit.component.html',
  styleUrls: ['./f-modifier-produit.component.css']
})
export class FModifierProduitComponent {
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


  id : number
  produit : any
  marque: any[];
  categorie: any[];

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
  produit.quantitue_produit = String(this.calculerTotalQuantite());
  this.service_produit.update(produit).subscribe(
    data => {
      alert(data);
      this.router.navigate(['/fournisseur/modifier-produits']); // Naviguer vers la page d'accueil
      setTimeout(() => {
        window.location.reload(); // Recharger la page
      }, 500); // Délai facultatif avant le rechargement (en millisecondes)
    },
    error => {
      console.log(error);
      // Gérer les erreurs ici
    }
  );
}
// calculerTotalQuantite(): number {
//   const quantiteBase = Number(this.produit.quantite_produit);
//   const quantiteAjoutee = Number(this.produit.quantite_ajoutee);
//   return quantiteBase + quantiteAjoutee;
// }
quantiteAjoutee: number;

calculerTotalQuantite(): number {
  if (this.quantiteAjoutee) {
    return Number(this.produit.quantitue_produit) + this.quantiteAjoutee;
  } else {
    return Number(this.produit.quantitue_produit);
  }
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
    const quantitueInput = <HTMLInputElement>document.getElementById("add_quantitue");
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
  logout() {
    localStorage.removeItem("login_fournisseur");
    window.location.href = "/admin-login";
  }
}
