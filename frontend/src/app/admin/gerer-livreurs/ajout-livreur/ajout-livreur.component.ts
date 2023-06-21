import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { response } from 'express';
import { MyuserService } from 'src/app/services/my_user.service';
@Component({
  selector: 'app-ajout-livreur',
  templateUrl: './ajout-livreur.component.html',
  styleUrls: ['./ajout-livreur.component.css']
})
export class AjoutLivreurComponent {
  constructor(private router: Router , private service_livreur : MyuserService){}
  
  ngOnInit(): void {
  }
  gotologin(){
    this.router.navigate(["/login"])
  }


  register(form_login : NgForm){
    console.log("i am work ");
   console.log(form_login.value)
   form_login.form.value['role']='livreur'
    if (form_login.value.password != form_login.value.confirmpassword)
     {alert("confirmer votre mot de passe")}
    else
      {      alert("Le client a été ajouté avec succès!");
      this.service_livreur.Register(form_login.value).subscribe(
        (response : any) =>{
          console.log(response);
        }
        
      )
      this.router.navigateByUrl('consulter-livreurs');

    }
  }
}
