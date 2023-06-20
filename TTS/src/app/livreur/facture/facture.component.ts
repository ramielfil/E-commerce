import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { my_user } from 'src/app/model/my_user';
import { commandeservice } from 'src/app/services/commande.service';
import { MyuserService } from 'src/app/services/my_user.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent {
  constructor(private commandeservice: commandeservice,myuserService : MyuserService, private router: Router) { }
myuser : my_user
  ngOnInit(): void {
    this.Getone();
  }

  id: number;
  commande: any;
  totalMontant: number = 0; // Variable pour stocker le total des montants

  Getone() {
    this.id = Number(localStorage.getItem("ref_commande"));
    this.commandeservice.GetOne(this.id).subscribe(
      data => {
        console.log(data);
        this.commande = data;
        this.calculateTotalMontant(); // Appel de la méthode pour calculer le total des montants
      }
    );
  }

  calculateTotalMontant() {
    this.commande.produits.forEach((produit: any) => {
      const montant = produit.prix_produit * produit.quantite;
      if (!isNaN(montant)) {
        this.totalMontant += montant;
      }
    });
  }
  logout() {
    localStorage.removeItem("login_livreur");
    window.location.href = "/admin-login";
  }

}
