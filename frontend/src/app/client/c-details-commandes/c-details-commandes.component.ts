import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { commandeservice } from 'src/app/services/commande.service';

@Component({
  selector: 'app-c-details-commandes',
  templateUrl: './c-details-commandes.component.html',
  styleUrls: ['./c-details-commandes.component.css']
})
export class CDetailsCommandesComponent {
  constructor(private commandeservice : commandeservice , private router : Router){}

ngOnInit():void{
  this.Getone()
}

id : number
commande : any

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
  localStorage.removeItem("login-admin");
  window.location.href = "/admin-login";
}
printDiv() {
  let printContents = document.getElementById('facture-print').innerHTML;
  
  let originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  setTimeout(() => {
    document.body.innerHTML = originalContents;
  }, 100);
}
}
