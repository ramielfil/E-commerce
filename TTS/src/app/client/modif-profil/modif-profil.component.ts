import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { my_user } from 'src/app/model/my_user';
import { MyuserService } from 'src/app/services/my_user.service';

@Component({
  selector: 'app-modif-profil',
  templateUrl: './modif-profil.component.html',
  styleUrls: ['./modif-profil.component.css']
})
export class ModifProfilComponent {
  constructor(private clientservice : MyuserService , private router : Router){}
  validname: boolean = true; // Initialisez-le à false par défaut
  validprenom: boolean = true;
  validemail: boolean = true;
  validnumtel: boolean = true;
  emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  showAlert: boolean = false;
  hideAlert() {
    this.showAlert = false;
  }
  navigateTo() {
window.location.reload()  }
  checkValidName() {
    const nomInput = <HTMLInputElement>document.getElementById("nom");
    const nomValue = nomInput.value;
    this.validname = nomValue!== '';
  }
  
  
  checkValidPrenom() {
    const prenomInput = <HTMLInputElement>document.getElementById("prenom");
    const prenomValue = prenomInput.value;
    this.validprenom = prenomValue !== '';
  }
  
  checkValidNumTel() {
    const numtelInput = <HTMLInputElement>document.getElementById("numtel");
    const numtelValue = numtelInput.value;
    this.validnumtel = !isNaN(parseInt(numtelValue)) && numtelValue.length === 8;
  }
  
  checkValidEmail() {
    const emailInput = <HTMLInputElement>document.getElementById("email");
    const emailValue = emailInput.value;
    this.validemail = this.emailRegex.test(emailValue);
  }
  
  
  ngOnInit(): void {
    this.Getone();
  }

id : number
client : any
Getone()
{
  this.id = Number(localStorage.getItem("login_client"))
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

save_modif(client: my_user) {
  this.showAlert = true;

  this.clientservice.update(client).subscribe(
    data => {
      alert(data);
    }
  );
}
}
