import { Component, ElementRef, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { commande } from 'src/app/model/commande';
import { produit } from 'src/app/model/produit';
import { CartService } from 'src/app/services/cart-service.service';
import { commandeservice } from 'src/app/services/commande.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent {


  constructor(private router: Router, private cartService: CartService,produitservice : ProduitService,
    private commandeservice : commandeservice){
      
    }
  cartItems: produit[] = [];
  total: number;
  hidden : boolean
  totalMontant: number = 0; // Variable pour stocker le total des montants


  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem("panier"));
    console.log(this.cartItems, "true");
    this.hidden = true;
  }
  gotoaccueil(){
    this.router.navigate(["/accueil"])
  }
  delete(produit : produit){
    this.cartService.removeItem(produit)
    this.ngOnInit()
  }

  show()
  {
    this.hidden=false
  }
  hide()
  {
    this.hidden=true
  }

  message : string ="No";
  adresse : string = "No";
  code_postal : number = 0 ;
  commande : commande = {
    ref_commande: 0,
    adresse: '',
    montant: 0,
    ville: '',
    message: '',
    code_postal: 0,
    type_depaiement: '',

    date_commande: undefined,
    statut_commande: 'en attente',
    etat: 'en attente',
    produits: JSON.parse(localStorage.getItem("panier")),
    my_user: {
      id: 0,
      nom: '',
      prenom: '',
      email: '',
      num_tel: 0
    },
    qte_value: []
  }

  @ViewChild('addressInput') addressInput: ElementRef;
  get address(): string {
    return this.addressInput.nativeElement.value;
  }
  
  @ViewChild('codepostalInput') codepostalInput: ElementRef;
  get codepostal(): string {
    return this.codepostalInput.nativeElement.value;
  }

  @ViewChild('messageInput') messageInput: ElementRef;
  get messageget(): string {
    return this.messageInput.nativeElement.value;
  }
  calculateTotalMontant() {
    this.totalMontant = 0; // Réinitialiser le montant total
  
    this.cartItems.forEach((produit: any) => {
      const montant = produit.prix_produit * produit.quantite;
      if (!isNaN(montant)) {
        this.totalMontant += montant;
      }
    });
  }

  Add() {
    // Create command object
    const userId = JSON.parse(localStorage.getItem("login_client"));
    if (userId === 0) {
      alert("Veuillez vous connecter avant de passer la commande !");
      return; // Arrêter l'exécution du reste de la fonction
    }
     if (!this.address || !this.codepostal || !this.message) {
      alert("Veuillez remplir tous les champs obligatoires !");
      return;
    }
    this.commande.adresse = this.address;
    console.log(localStorage.getItem("login_client"));
    this.commande.my_user.id = JSON.parse(localStorage.getItem("login_client"));
    this.commande.code_postal = Number(this.codepostal);
    this.commande.message = this.messageget;
    this.calculateTotalMontant(); // Calculate total amount
    this.commande.montant = this.totalMontant; // Assign the calculated total to the montant property
    this.commande.type_depaiement = "local";
    this.commande.ville = this.address;
  
    let hasInsufficientStock = false;
    this.cartItems.forEach((produit: any) => {
      if (produit.quantite > Number(produit.quantitue_produit)) {
        hasInsufficientStock = true;
        const message = "Ops ! , La quantité demander du " + produit.nom_produit + " n'est pas disponible pour le moment";
        alert(message);      }
    });
  
    if (!hasInsufficientStock) {
      // Send the command object to the service
      this.commandeservice.Register(this.commande).subscribe();
      localStorage.removeItem("panier");
      localStorage.removeItem("ref_produit");
    }
  }
  
  
  
  
  
  
  
}
