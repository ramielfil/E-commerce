import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { produit } from 'src/app/model/produit';
import { CartService } from 'src/app/services/cart-service.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
    constructor(private router: Router, private cartService: CartService,private ProduitService : ProduitService){}
    cartItems: produit[] = [];
    total: number;
    x : produit;
    totalMontant: number = 0; // Variable pour stocker le total des montants


    ngOnInit(): void {
      this.cartItems=JSON.parse(localStorage.getItem("panier"))
      console.log(this.cartItems)
    }
    gotoaccueil(){
      this.router.navigate(["/accueil"])
    }

    update(cartItems: produit[]) {
      localStorage.removeItem("panier");
    
      cartItems.forEach(element => {
        const existingItem = this.cartItems.find(i => i.ref_produit === element.ref_produit);
        if (existingItem) {
          existingItem.quantitue_produit = element.quantitue_produit;
        }
      });
    
      localStorage.setItem("panier", JSON.stringify(cartItems));
      this.router.navigate(["/paiement"]);
    }
    
    
    delete(produit : produit){
      this.cartService.removeItem(produit)
      this.ngOnInit()
    }

  incrementQuantity(index: number) {
    this.cartItems[index].quantite++; // Update quantity for the specific product
  }

  decrementQuantity(index: number) {
    if (this.cartItems[index].quantite > 1) {
      this.cartItems[index].quantite--; // Update quantity for the specific product
    }
  }

produit : any
  newQuantite : number
save_modif(produit : produit)
{console.log("save_modif")

  this.newQuantite = Number((<HTMLInputElement>document.getElementById("quantite")).value);
  produit.quantite=this.newQuantite
  console.log(this.newQuantite)




  this.ProduitService.update(produit).subscribe(
    data => {
      alert(data)
    }
  )
  }
}

