import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DATE } from 'sequelize';
import { my_user } from 'src/app/model/my_user';
import { MyuserService } from 'src/app/services/my_user.service';
@Component({
  selector: 'app-modifier-clients',
  templateUrl: './modifier-clients.component.html',
  styleUrls: ['./modifier-clients.component.css']
})
export class ModifierClientsComponent {

  
  constructor(private clientservice : MyuserService , private router : Router){}
  showAlert: boolean = false;
  hideAlert() {
    this.showAlert = false;
  }
  navigateToClients() {
    this.router.navigateByUrl('consulter-clients');
  }
ngOnInit():void{
  this.Getone()
}

id : number
client : any
Getone()
{
  this.id = Number(localStorage.getItem("id_client"))
  this.clientservice.GetOne(this.id).subscribe(
    data =>
    {
      console.log(data)
      this.client = data
    }
  )
}

new_email : string
new_nom : string
new_prenom : string
new_numtel : number
new_dateNaiss : Date
save_modif(client : my_user)
{
  this.showAlert = true;

  this.new_email = (<HTMLInputElement>document.getElementById("email")).value;
  client.email=this.new_email

  this.new_numtel = Number((<HTMLInputElement>document.getElementById("num_tel")).value);
  client.numtel=this.new_numtel;

  this.new_nom = (<HTMLInputElement>document.getElementById("nom")).value;
  client.nom=this.new_nom

  this.new_prenom = (<HTMLInputElement>document.getElementById("prenom")).value;
  client.prenom=this.new_prenom




  console.log(client);
  this.clientservice.update(client).subscribe(
    data => {
      alert(data)
    }
  )

}


}
