import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { produit } from 'src/app/model/produit';
import { ProduitService } from 'src/app/services/produit.service';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private produitservice : ProduitService , private router : Router){}
  isLoggedin: boolean = false; // Initialisez-le à false par défaut

  ngOnInit():void{
     if (localStorage.getItem("login_client")== null)
        localStorage.setItem("login_client",String(0));
    this.getAll()

  }
  shuffledProduits: produit[];

  // Function to shuffle the produits array randomly
  shuffleProduits() {
    this.shuffledProduits = this.produits.slice(); // Create a shallow copy of the produits array
    for (let i = this.shuffledProduits.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.shuffledProduits[i], this.shuffledProduits[j]] = [this.shuffledProduits[j], this.shuffledProduits[i]];
    }
  }
  produits : produit[]
  getAll()
  {
    this.produitservice.GetAll().subscribe(
      data =>{
        console.log(data);
        this.produits=data;
        this.shuffleProduits();

      }
    )
  
  }
  
    affiche(id : Number)
    { 
      localStorage.setItem("ref_produit",String(id));
      this.router.navigateByUrl('details');
    }
  
    supp(id : Number)
    {
      this.produitservice.Delete(id).subscribe(
        data =>{
         alert(data)
         this.getAll()
        }
      )
    }

}
