import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import { response } from 'express';
import { categorie } from 'src/app/model/categorie';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators }
  from '@angular/forms';
import { CategorieService } from 'src/app/services/categorie.service';
@Component({
  selector: 'app-ajout-categotie',
  templateUrl: './ajout-categotie.component.html',
  styleUrls: ['./ajout-categotie.component.css']
})
export class AjoutCategotieComponent {
  constructor(private router: Router , public service_categorie : CategorieService ){}
  showAlert: boolean = false;
  hideAlert() {
    this.showAlert = false;
  }
  navigateTo() {
    this.router.navigateByUrl('consulter-categories');
  }
  ngOnInit(): void {
  }



  register(form_login : NgForm){
    console.log("i am work ");
    console
    if (form_login.value.nom_categorie =="")
     {alert(" saisir Le nom du nouvelle Categorie")}
    else
      {      this.showAlert = true;
      this.service_categorie.Register(form_login.value).subscribe(
        (response : any) =>{
          console.log(response);
        }
        
      )

    }
  }



    


    }







