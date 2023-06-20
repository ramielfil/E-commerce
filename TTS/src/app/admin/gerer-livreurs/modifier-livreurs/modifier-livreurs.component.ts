import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DATE } from 'sequelize';
import { my_user } from 'src/app/model/my_user';
import { MyuserService } from 'src/app/services/my_user.service';

@Component({
  selector: 'app-modifier-livreurs',
  templateUrl: './modifier-livreurs.component.html',
  styleUrls: ['./modifier-livreurs.component.css']
})
export class ModifierLivreursComponent {

  
  constructor(private livreurservice : MyuserService , private router : Router){}
  showAlert: boolean = false;
  hideAlert() {
    this.showAlert = false;
  }
  navigateTo() {
    this.router.navigateByUrl('consulter-livreurs');
  }
ngOnInit():void{
  this.Getone()
}

id : number
livreur : any
Getone()
{
  this.id = Number(localStorage.getItem("id_livreur"))
  this.livreurservice.GetOne(this.id).subscribe(
    data =>
    {
      console.log(data)
      this.livreur = data
    }
  )
}

new_email : string
new_nom : string
new_prenom : string
new_numtel : number
new_dateNaiss : Date
new_password : string
save_modif(livreur : my_user)
{console.log("save_modif")
this.showAlert = true;

  this.new_email = (<HTMLInputElement>document.getElementById("email")).value;
  livreur.email=this.new_email

  this.new_numtel = Number((<HTMLInputElement>document.getElementById("num_tel")).value);
  livreur.numtel=this.new_numtel;

  this.new_nom = (<HTMLInputElement>document.getElementById("nom")).value;
  livreur.nom=this.new_nom

  this.new_prenom = (<HTMLInputElement>document.getElementById("prenom")).value;
  livreur.prenom=this.new_prenom
  this.new_password = (<HTMLInputElement>document.getElementById("password")).value;
  livreur.password=this.new_password




  console.log(livreur);
  this.livreurservice.update(livreur).subscribe(
    data => {
      alert(data)
    }
  )
  }}

