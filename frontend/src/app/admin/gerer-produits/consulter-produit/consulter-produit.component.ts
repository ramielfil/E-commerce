import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { produit } from 'src/app/model/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-consulter-produit',
  templateUrl: './consulter-produit.component.html',
  styleUrls: ['./consulter-produit.component.css']
})
export class ConsulterProduitComponent {
  constructor(private produitservice : ProduitService , private router : Router){}

ngOnInit():void{
  this.getAll()
}

produits : produit[]
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
    this.router.navigateByUrl('consulter-produits/modifier');
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
