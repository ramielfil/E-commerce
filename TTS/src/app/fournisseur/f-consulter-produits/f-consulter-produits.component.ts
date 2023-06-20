import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { produit } from 'src/app/model/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-f-consulter-produits',
  templateUrl: './f-consulter-produits.component.html',
  styleUrls: ['./f-consulter-produits.component.css']
})
export class FConsulterProduitsComponent {
  constructor(private produitservice : ProduitService , private router : Router){}

ngOnInit():void{
  this.getAll()
}

produits : any
  getAll()
  {
    this.produitservice.GetAll().subscribe(
      data =>{
        console.log(data);
        this.produits=data;
        console.log(this.produits[0].imageData1)
      }
    )

  }

  Modif(id : Number)
  { 
    localStorage.setItem("ref_produit",String(id));
    this.router.navigateByUrl('fournisseur/modifier-produits');
  }
  logout() {
    localStorage.removeItem("login_fournisseur");
    window.location.href = "/admin-login";
  }

}
