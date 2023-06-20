import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Options, LabelType } from 'ng5-slider';
import { categorie } from 'src/app/model/categorie';
import { marque } from 'src/app/model/marque';
import { produit } from 'src/app/model/produit';
import { CategorieService } from 'src/app/services/categorie.service';
import { marqueServiceService } from 'src/app/services/marque.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent {
  constructor(
    private produitservice: ProduitService,
    private categorieservice: CategorieService,
    private marqueService: marqueServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {}

  selectedCategoryId: number;
  produits: produit[];
  categories: categorie[];
  marques: marque[];
  selectedBrandIds: number[] = [];
  selectAllBrands: boolean = false;
  brandSelections: { [brandId: number]: boolean } = {};
  allProduits: produit[];

  // filtrer par categorie *************************

  
  

// Filtrage Du Prix *************************************************

minValue: number = 0;
maxValue: number = 10000;
options: Options = {
  floor: 0,
  ceil: 10000, // Définissez la valeur maximale appropriée pour votre cas d'utilisation
  translate: (value: number, label: LabelType): string => {
    // Personnalisez la fonction translate selon vos besoins
    return ' TND ' + value;
  }
};
priceFiltering(filterType: string) {
  // Réinitialiser les produits filtrés avec les produits d'origine non filtrés
  this.produits = [...this.allProduits];

  // Filtrer les produits en fonction des nouvelles valeurs min et max
  if (this.minValue > 0) {
    this.produits = this.produits.filter(produit => {
      const prixProduit = parseFloat(produit.prix_produit);
      return prixProduit >= this.minValue && prixProduit <= this.maxValue;
    });
  } else {
    this.produits = this.produits.filter(produit => {
      const prixProduit = parseFloat(produit.prix_produit);
      return prixProduit <= this.maxValue;
    });
  }
}

clearPrice() {
  this.minValue = 0;
  this.maxValue = 10000;
  this.getAllProduit(); // Appeler la fonction de filtrage après avoir effacé le prix

}
// End Filtrage Du prix *********************************************************

ngOnInit(): void {
  this.activatedRoute.queryParams.subscribe(params => {
    const refCategorie = params['categorie'];
    this.selectedCategoryId = refCategorie ? parseInt(refCategorie) : null;
    this.getAllProduit();
  });
  this.getAllCategorie();
  this.getAllMarque();
}


getAllProduit() {
  this.produitservice.GetAll().subscribe(data => {
    console.log(data);
    this.allProduits = data; // Assignez les données à la variable allProduits

    // Filtrer les produits en fonction des valeurs min et max de prix
    let filteredProduits = data;
    if (this.minValue > 0) {
      filteredProduits = filteredProduits.filter(produit => {
        const prixProduit = parseFloat(produit.prix_produit);
        return prixProduit >= this.minValue && prixProduit <= this.maxValue;
      });
    } else {
      filteredProduits = filteredProduits.filter(produit => {
        const prixProduit = parseFloat(produit.prix_produit);
        return prixProduit <= this.maxValue;
      });
    }

    // Filtrer les produits en fonction des marques sélectionnées
    if (this.selectedBrandIds.length > 0) {
      filteredProduits = filteredProduits.filter(produit => this.selectedBrandIds.includes(produit.ref_marque));
    }

    // Filtrer les produits en fonction de la catégorie sélectionnée
  if (this.selectedCategoryId) {
    this.produitservice.GetProduitsByCategorie(this.selectedCategoryId).subscribe(data => {
      console.log(data);
      this.produits = data;
    });
  } else {
    this.produitservice.GetAll().subscribe(data => {
      console.log(data);
      this.produits = data;
    });
  }

    this.produits = filteredProduits;
  });
}




applyFilters() {
  let filteredProduits = [...this.allProduits];

  // Filtrer par prix
  if (this.minValue > 0) {
    filteredProduits = filteredProduits.filter(produit => {
      const prixProduit = parseFloat(produit.prix_produit);
      return prixProduit >= this.minValue && prixProduit <= this.maxValue;
    });
  } else {
    filteredProduits = filteredProduits.filter(produit => {
      const prixProduit = parseFloat(produit.prix_produit);
      return prixProduit <= this.maxValue;
    });
  }

  // Filtrer par marques sélectionnées
  if (this.selectedBrandIds.length > 0) {
    filteredProduits = filteredProduits.filter(produit => this.selectedBrandIds.includes(produit.ref_marque));
  }

  // Filtrer les produits en supprimant les doublons
  const uniqueProduits = filteredProduits.filter((produit, index, self) =>
    index === self.findIndex(p => p.ref_produit === produit.ref_produit)
  );

  this.produits = uniqueProduits;
}

  
affiche(id : Number)
{ 
  localStorage.setItem("ref_produit",String(id));
  this.router.navigateByUrl('details');
}


  toggleSelectAllBrands() {
    if (this.selectAllBrands) {
      this.selectedBrandIds = this.marques.map(marque => marque.ref_marque);
    } else {
      this.selectedBrandIds = [];
    }
    this.filterProduitsByMarque();
  }

  filterProduitsByMarque() {
    if (this.selectedBrandIds.length > 0) {
      this.produitservice.GetByMarque(this.selectedBrandIds).subscribe(data => {
        console.log(data);
        this.produits = data;
      });
    } else {
      this.getAllProduit();
    }
  }

  isSelectedBrand(brandId: number): boolean {
    return this.brandSelections[brandId] || false;
  }

  onBrandSelectionChange(brandId: number, isChecked: boolean) {
    this.brandSelections[brandId] = isChecked;
if (isChecked) {
  this.selectedBrandIds.push(brandId);
} else {
  const index = this.selectedBrandIds.indexOf(brandId);
  if (index !== -1) {
    this.selectedBrandIds.splice(index, 1);
  }
}
this.filterProduitsByMarque();  }

  getAllCategorie() {
    this.categorieservice.GetAll().subscribe(data => {
      console.log(data);
      this.categories = data;
    });
  }

  getAllMarque() {
    this.marqueService.GetAll().subscribe(data => {
      console.log(data);
      this.marques = data;
      // this.getProduitCountsForMarques();
    });
  }


}

  // getProduitCountsForMarques() {
  //   for (let marque of this.marques) {
  //     marque.produits = this.produits.filter((produit) => {
  //       console.log('marque.ref_marque:', marque.ref_marque);
  //       console.log('produit.ref_marque:', produit.ref_marque);
  //       return produit.ref_marque === marque.ref_marque;
  //     });
  //     console.log('marque.produits:', marque.produits);
  //   }
  // }
