import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { response } from 'express';
import { MyuserService } from 'src/app/services/my_user.service';

@Component({
  selector: 'app-ajout-fournisseur',
  templateUrl: './ajout-fournisseur.component.html',
  styleUrls: ['./ajout-fournisseur.component.css']
})
export class AjoutFournisseurComponent {
  constructor(private router: Router , private fournisseur_service : MyuserService){}
  showAlert: boolean = false;
  hideAlert() {
    this.showAlert = false;
  }
  navigateTo() {
    this.router.navigateByUrl('consulter-fournisseurs');
  }
  ngOnInit(): void {
  }
  gotologin(){
    this.router.navigate(["/login"])
  }

  register(form_login : NgForm){
    console.log("i am work ");
   console.log(form_login.value)
   form_login.form.value['role']='fournisseur'
    if (form_login.value.password != form_login.value.confirmpassword)
     {alert("confirmer votre mot de passe")}
    else
      {             this.showAlert = true;

      this.fournisseur_service.Register(form_login.value).subscribe(
        (response : any) =>{
          console.log(response);
        }
        
      )

    }
  }
}

