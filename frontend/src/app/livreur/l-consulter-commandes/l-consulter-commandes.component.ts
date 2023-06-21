import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { commande } from 'src/app/model/commande';
import { produit } from 'src/app/model/produit';
import { commandeservice } from 'src/app/services/commande.service';
import { NgForm } from '@angular/forms';
import { Observer } from 'rxjs';
@Component({
  selector: 'app-l-consulter-commandes',
  templateUrl: './l-consulter-commandes.component.html',
  styleUrls: ['./l-consulter-commandes.component.css']
})
export class LConsulterCommandesComponent {
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
        this.commandes = data.filter(commande => commande.statut_commande === 'en attente');
      }
    );
  }
  afficher2(id : Number,statut_commande)
  { 
    localStorage.setItem("ref_commande",String(id));
    localStorage.setItem("statut_commande",String(statut_commande));
  
    console.log(id)
    
  }
    afficher(id : Number)
    { 
      localStorage.setItem("ref_commande",String(id));
      this.router.navigateByUrl('livreur/facture-client');
      
    }
  
  
    statut_commande : string
    ref_commande1 : any
    nom : string 
    prenom : string
    onStatutChange(form_login: NgForm) {
      this.ref_commande1 = localStorage.getItem("ref_commande");
      this.nom = localStorage.getItem("nom");
      this.prenom = localStorage.getItem("prenom");
  
      this.statut_commande = form_login.value.statut_commande;
    
      console.log("Changement Statut pour la commande :", this.ref_commande1);
      console.log("Nouvel Staut de la commande :", this.statut_commande);
    
      // Appel de la fonction update_etat
      this.commandeservice.update_statut(this.ref_commande1, this.statut_commande)
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
        window.location.reload()
  }
  logout() {
    localStorage.removeItem("login_livreur");
    window.location.href = "/admin-login";
  }
}
