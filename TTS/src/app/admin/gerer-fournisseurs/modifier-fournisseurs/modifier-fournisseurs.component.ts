import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DATE } from 'sequelize';
import { my_user } from 'src/app/model/my_user';
import { MyuserService } from 'src/app/services/my_user.service';
@Component({
  selector: 'app-modifier-fournisseurs',
  templateUrl: './modifier-fournisseurs.component.html',
  styleUrls: ['./modifier-fournisseurs.component.css']
})
export class ModifierFournisseursComponent {

  
  constructor(private fournisseurservice : MyuserService , private router : Router){}
  showAlert: boolean = false;
  hideAlert() {
    this.showAlert = false;
  }
  navigateTo() {
    this.router.navigateByUrl('consulter-fournisseurs');
  }
  ngOnInit():void{
    this.Getone()
  }
  
  id : number
  fournisseur : any
  Getone()
  {
    this.id = Number(localStorage.getItem("id_fournisseur"))
    this.fournisseurservice.GetOne(this.id).subscribe(
      data =>
      {
        console.log(data)
        this.fournisseur = data
      }
    )
  }

new_email : string
new_nom : string
new_prenom : string
new_numtel : number
new_dateNaiss : Date
new_password : string
save_modif(fournisseur : my_user)

{console.log("save_modif")
this.showAlert = true;

  this.new_email = (<HTMLInputElement>document.getElementById("email")).value;
  fournisseur.email=this.new_email

  this.new_numtel = Number((<HTMLInputElement>document.getElementById("num_tel")).value);
  fournisseur.numtel=this.new_numtel;

  this.new_nom = (<HTMLInputElement>document.getElementById("nom")).value;
  fournisseur.nom=this.new_nom

  this.new_prenom = (<HTMLInputElement>document.getElementById("prenom")).value;
  fournisseur.prenom=this.new_prenom

  this.new_password = (<HTMLInputElement>document.getElementById("password")).value;
  fournisseur.password=this.new_password


  console.log(fournisseur);
  this.fournisseurservice.update(fournisseur).subscribe(
    data => {
      alert(data)
    }
  )


}

}
