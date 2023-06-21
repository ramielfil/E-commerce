import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { commande } from 'src/app/model/commande';
import { produit } from 'src/app/model/produit';
import { commandeservice } from 'src/app/services/commande.service';
import { NgForm } from '@angular/forms';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-commandes-encours',
  templateUrl: './commandes-encours.component.html',
  styleUrls: ['./commandes-encours.component.css']
})
export class CommandesEncoursComponent {
  constructor(private commandeservice : commandeservice , private router : Router){}

ngOnInit():void{
  this.getAll()
}


commandes : commande[]
selectedCommande: commande;
commande : any
getAll() {
  this.commandeservice.GetAll().subscribe(
    data => {
      console.log(data);
      this.commandes = data.filter(commande => commande.etat === 'en attente');
    }
  );
}
afficher2(id : Number,etat)
{ 
  localStorage.setItem("ref_commande",String(id));
  localStorage.setItem("etat",String(etat));

  console.log(id)
  
}
  afficher(id : Number)
  { 
    localStorage.setItem("ref_commande",String(id));
    this.router.navigateByUrl('consulter-commandes/details');
    
  }


  etat_commande1 : string
  ref_commande1 : any
  nom : string 
  prenom : string
  onEtatChange(form_login: NgForm) {
    this.ref_commande1 = localStorage.getItem("ref_commande");
    this.nom = localStorage.getItem("nom");
    this.prenom = localStorage.getItem("prenom");

    this.etat_commande1 = form_login.value.etat;
  
    console.log("Changement d'état pour la commande :", this.ref_commande1);
    console.log("Nouvel état de la commande :", this.etat_commande1);
  
    // Appel de la fonction update_etat
    this.commandeservice.update_etat(this.ref_commande1, this.etat_commande1)
      .subscribe(
        () => {
          console.log("État de la commande mis à jour avec succès dans la base de données");
          
          // Effectuez d'autres actions après la mise à jour de l'état
        },
        (error) => {
          console.error("Erreur lors de la mise à jour de l'état de la commande :", error);
          // Traitez les erreurs de manière appropriée
        }
      );
      this.ngOnInit()
}}
