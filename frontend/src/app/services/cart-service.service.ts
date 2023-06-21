import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { produit } from '../model/produit';
import { Json } from 'sequelize/types/utils';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public items: produit[] = [];
  public cartSubject = new BehaviorSubject<produit[]>([]);
  public cart$ = this.cartSubject.asObservable();
  private apiUrl = '/api/produit/';

  constructor(private httpClient: HttpClient) {
    this.initializeCart(); // Appel de la méthode d'initialisation lors de la création du service
  }
  updateQuantity(produit: produit): Observable<any> {
    const url = this.apiUrl + 'quantite/' + produit.ref_produit;
    const quantite = produit.quantite;
  
    return this.httpClient.put(url, { quantite });
  }

  initializeCart() {
    const savedCart = localStorage.getItem("panier");
    if (savedCart) {
      this.items = JSON.parse(savedCart);
      this.cartSubject.next(this.items); // Mettre à jour le sujet avec les données récupérées
    }
  }

  addItem(item: produit) {
    const index = this.items.findIndex(i => i.ref_produit === item.ref_produit);
    if (index !== -1) {
      Number(this.items[index].quantitue_produit) - item.quantite; // Mettre à jour la quantité du produit existant
    } else {
      this.items.push(item);
    }
  
    this.cartSubject.next(this.items);
  
    localStorage.setItem("panier", JSON.stringify(this.items));
  }


  
  

  removeItem(item: produit) {
    this.items=JSON.parse(localStorage.getItem("panier"))
    const index = this.items.findIndex(i => i.ref_produit == item.ref_produit);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
    this.cartSubject.next(this.items);
    localStorage.setItem("panier",JSON.stringify(this.items))

  }


}
