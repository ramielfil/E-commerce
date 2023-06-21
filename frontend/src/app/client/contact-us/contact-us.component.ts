import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { contact_us } from 'src/app/model/contactus';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  constructor(private router: Router , private ContactUsService: ContactUsService) {}
  showAlert: boolean = false;
  hideAlert() {
    this.showAlert = false;
  }
  navigateTo() {
    this.router.navigate(["/accueil"])
  }
  validname: boolean = true; // Initialisez-le à false par défaut
  validtitre: boolean = true;
  validemail: boolean = true;
  emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  checkValidName() {
    const nomInput = <HTMLInputElement>document.getElementById("name");
    const nomValue = nomInput.value;
    this.validname = nomValue!== '';
  }
  
  
  checkValidtitre() {
    const titreInput = <HTMLInputElement>document.getElementById("titre");
    const titreValue = titreInput.value;
    this.validtitre = titreValue !== '';
  }
  

  
  checkValidEmail() {
    const emailInput = <HTMLInputElement>document.getElementById("email");
    const emailValue = emailInput.value;
    this.validemail = this.emailRegex.test(emailValue);
  }
  ngOnInit(): void {
  }
  form: contact_us = {} as contact_us;

  envoyer(form: NgForm) {
    console.log("i am work ");
    console.log(form.value);
    console.log(form.value.email);
  
    if (form.value.email == "") {
      alert("Remplir l'email");
    } else {
      this.showAlert = true;
      this.ContactUsService.envoyer(form.value).subscribe(
        (response: any) => {
          console.log(response);
        }
      );
    }
  }
}
