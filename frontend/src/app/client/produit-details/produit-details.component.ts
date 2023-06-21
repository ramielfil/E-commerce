import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { produit } from 'src/app/model/produit';
import { CartService } from 'src/app/services/cart-service.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProduitDetailsComponent {
  constructor(private produitservice : ProduitService , private router : Router,
    private cartService: CartService){}

  ngOnInit():void{
    this.Getone()
  }
  
  id : number
  produit : any
  relatedProducts: produit[] = [];

  Getone()
  {
    this.id = Number(localStorage.getItem("ref_produit"))
    this.produitservice.GetOne(this.id).subscribe(
      data =>
      {
        console.log(data)
        this.produit = data

      }
    )
  }


  addItem(item: produit) {
    alert("prouduit ajouté")
    console.log(item)
    this.cartService.addItem(item);
    
  }
  addItem2(item: produit) {
    alert("prouduit ajouté")
    console.log(item)
    this.cartService.addItem(item);
    this.router.navigate(["/panier"]);
  }
  quantity = 1; // initial quantity value
  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  isAvailable(): boolean {
    const quantity: number = Number(this.produit.quantitue_produit);
    return quantity > 0;
  }
  isOutOfStock(produit: any): boolean {
    return produit.quantitue_produit === '0';
  }
}
