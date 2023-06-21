import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { my_user } from 'src/app/model/my_user';
import { MyuserService } from 'src/app/services/my_user.service';

@Component({
  selector: 'app-f-modifier-profil',
  templateUrl: './f-modifier-profil.component.html',
  styleUrls: ['./f-modifier-profil.component.css']
})
export class FModifierProfilComponent {
  constructor(private fournisseurservice : MyuserService , private router : Router){}
  validname: boolean = true; // Initialisez-le à false par défaut
  validprenom: boolean = true;
  validemail: boolean = true;
  validnumtel: boolean = true;
  emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
fournisseur : any
Getone()
{
  this.id = Number(localStorage.getItem("login_fournisseur"))
  this.fournisseurservice.GetOne(this.id).subscribe(
    data =>
    {
      console.log(data)
      this.fournisseur = data
    }
  )
}


save_modif(fournisseur: my_user) {
  this.fournisseurservice.update(fournisseur).subscribe(
    data => {
      alert(data);
    }
  );
}
logout() {
  localStorage.removeItem("login_fournisseur");
  window.location.href = "/admin-login";
}
}
