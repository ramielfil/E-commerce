import { Component, NgModule } from '@angular/core';
import { my_user } from 'src/app/model/my_user';
import { MyuserService } from 'src/app/services/my_user.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifier-profil',
  templateUrl: './modifier-profil.component.html',
  styleUrls: ['./modifier-profil.component.css']
})
export class ModifierProfilComponent {
  constructor(private adminservice : MyuserService , private router : Router){}
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
admin : any
Getone()
{
  this.id = Number(localStorage.getItem("login_admin"))
  this.adminservice.GetOne(this.id).subscribe(
    data =>
    {
      console.log(data)
      this.admin = data
    }
  )
}


save_modif(admin: my_user) {
  this.adminservice.update(admin).subscribe(
    data => {
      alert(data);
    }
  );
}
logout() {
  localStorage.removeItem("login_admin");
  window.location.href = "/admin-login";
}
}
