import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { produit } from 'src/app/model/produit';
import { ProduitService } from 'src/app/services/produit.service';
import { my_user } from 'src/app/model/my_user';
import { MyuserService } from 'src/app/services/my_user.service';
import { marqueServiceService } from 'src/app/services/marque.service';
import { marque } from 'src/app/model/marque';
import { categorie } from 'src/app/model/categorie';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private produitservice : ProduitService , private router : Router,
    private myuserService: MyuserService, private marqueService: marqueServiceService,
    private route: ActivatedRoute,
    private categorieservice: CategorieService){}
  isLoggedin: boolean = false; // Initialisez-le à false par défaut
  user: any;
  marques: marque[];
  categories: categorie[];
  nom_marque: string;
  produits : produit[]

  searchQuery: string;
  productSuggestions: produit[];

  ngOnInit(): void {
    this.getAll();
    this.route.queryParams.subscribe(params => {

    });
    if (localStorage.getItem("login_client") == null)
      localStorage.setItem("login_client", String(0));
  
  
    // Vérifiez si l'utilisateur est connecté
    if (localStorage.getItem("login_client") !== "0") {
      this.isLoggedin = true; // Mettez à jour la valeur de isLoggedin à true
  
      // Récupérez les informations de l'utilisateur connecté en utilisant le service MyuserService
      const userId = parseInt(localStorage.getItem("login_client") || '0');
      this.myuserService.GetOne(userId).subscribe(
        response => {
          this.user = response;
        },
        error => {
          console.error("Error retrieving user information", error);
        }
      );
    }
  }

  getAll()
  {
    this.categorieservice.GetAll().subscribe(
      data =>{
        console.log(data);
        this.categories=data;
      }
    )
  
  }
  gotologin(){
    this.router.navigate(["/login"])
  }
  gotopanier(){
    this.router.navigate(["/panier"])
  }
  
  logout() {
    localStorage.removeItem("login_client");
    window.location.href = "/accueil";
  }

  affiche(refProduit: number) {
    localStorage.setItem('ref_produit', String(refProduit));

    this.router.navigateByUrl('details');
  }

  searchProduct() {
    console.log('searchQuery:', this.searchQuery);
    this.produitservice.GetAll().subscribe(
      (data: produit[]) => {
        console.log('Résultat de getAll:', data);
        const produits = data;
  
        const searchRegex = new RegExp('^' + this.searchQuery, 'i');
        this.productSuggestions = produits.filter(produit => searchRegex.test(produit.nom_produit));
  
        const matchingProduct = produits.find(
          produit => produit.nom_produit.toLowerCase() === this.searchQuery.toLowerCase()
        );
  
        if (matchingProduct) {
          localStorage.setItem('ref_produit', String(matchingProduct.ref_produit));
  
          // Vérifier si déjà dans la page de détails
          if (window.location.pathname !== '/details') {
            this.router.navigateByUrl('details');
          } else {
            // Recharger la page
            window.location.reload();
          }
        } else {
          console.log('Produit introuvable');
          // Traitez le cas où aucun produit ne correspond à la recherche
        }
      },
      error => {
        console.error('Erreur lors de la recherche du produit', error);
        // Traitez l'erreur de recherche du produit
      }
    );
  }
  redirectToDetails(refProduit: number) {
    localStorage.setItem('ref_produit', String(refProduit));
  
    // Vérifier si déjà dans la page de détails
    if (window.location.pathname !== '/details') {
      this.router.navigateByUrl('details');
    } else {
      // Recharger la page
      window.location.reload();
    }
  }

  getSearchSuggestions() {
    if (this.searchQuery) {
      this.produitservice.GetAll().subscribe(
        (data: produit[]) => {
          const produits = data;
          const searchRegex = new RegExp('^' + this.searchQuery, 'i');
          this.productSuggestions = produits.filter(produit => searchRegex.test(produit.nom_produit));
        },
        error => {
          console.error('Erreur lors de la récupération des suggestions de produits', error);
          // Traitez l'erreur de récupération des suggestions de produits
        }
      );
    } else {
      this.productSuggestions = [];
    }
  }

  selectSuggestion(suggestion: produit) {
    this.searchQuery = suggestion.nom_produit;
    this.productSuggestions = []; // Efface les suggestions après la sélection
    this.searchProduct(); // Exécute la recherche avec la suggestion sélectionnée
  }
}
