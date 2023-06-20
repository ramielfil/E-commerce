import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { categorie } from 'src/app/model/categorie';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-consulter-categories',
  templateUrl: './consulter-categories.component.html',
  styleUrls: ['./consulter-categories.component.css']
})
export class ConsulterCategoriesComponent {
  constructor(private categorieservice : CategorieService , private router : Router){}
  showAlert: boolean = false;
  hideAlert() {
    this.showAlert = false;
  }
  navigateTo() {
window.location.reload()
  }
ngOnInit():void{
  this.getAll()
}
categorie : any;
categories: categorie[]
  getAll()
  {
    this.categorieservice.GetAll().subscribe(
      data =>{
        console.log(data);
        this.categories=data;
      }
    )

  }

  Modif(id : Number)
  { 
    localStorage.setItem("ref_categorie",String(id));
    this.router.navigateByUrl('consulter-categories/modifier');
  }

  supp(id : Number)
  {
    this.showAlert = true;
    this.categorieservice.Delete(id).subscribe(
      data =>{
       alert(data)
       this.getAll()
      }
    )
  }
}
