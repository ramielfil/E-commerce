import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyuserService } from 'src/app/services/my_user.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {
  validname: boolean = false;
  validprenom: boolean = false;
  validemail: boolean = false;
  validnumtel: boolean = false;
  validpassword: boolean = false;
  nameTouched: boolean = false;
  prenomTouched: boolean = false;
  numtelTouched: boolean = false;
  emailTouched: boolean = false;
  passwordTouched: boolean = false;
  passwordConfirmTouched: boolean = false;
  
  emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  client: any = {};

  constructor(private router: Router, private service_client: MyuserService) {}
  ngOnInit(): void {
  }
  id : number
  showAlert: boolean = false;
  hideAlert2() {
    this.showAlert = false;
  }
  navigateTo() {
    this.router.navigateByUrl('login');
  }
  gotologin() {
    this.router.navigate(['/login']);
  }
  hideAlert(field: string): void {
    switch (field) {
      case 'nom':
        this.validname = true;
        break;
      case 'prenom':
        this.validprenom = true;
        break;
      case 'numtel':
        this.validnumtel = true;
        break;
      case 'email':
        this.validemail = true;
        break;
      case 'password':
        this.validpassword = true;
        break;
      case 'passwordConfirm':
        // Ajoutez la logique appropriée pour le champ de confirmation de mot de passe
        break;
      default:
        break;
    }
  }

  checkValidName() {
    this.validname = this.client.nom !== "";
    
  }

  checkValidPrenom() {
    this.validprenom = this.client.prenom !== "";
  }

  checkValidNumTel() {
    const numtelValue = this.client.numtel;
    this.validnumtel = !isNaN(parseInt(numtelValue)) && numtelValue.length === 8;
  }

  checkValidEmail() {
    const emailValue = this.client.email;
    this.validemail = this.emailRegex.test(emailValue);
  }
  checkValidPassword() {
    const passwordValue = this.client.password;
    this.validpassword = passwordValue.length >= 8;
  }
  checkPasswordsMatch(form: NgForm) {
    const password = form.value.password;
    const confirmPassword = form.value.passwordConfirm;
    return password === confirmPassword;
  }


  register(form_login: NgForm) {
    console.log('i am work');
    console.log(form_login.value);
    form_login.value['role'] = 'client';
  
    if (!this.checkPasswordsMatch(form_login)) {
      alert('Confirmez votre mot de passe');
    } else {
  
      const userEmail = form_login.value.email;
  
      this.service_client.Register(form_login.value).subscribe(
        (response: any) => {
          console.log(response);
          this.sendRegistrationEmail(userEmail);
        }
      );
  
      this.showAlert = true;
    }
  }
  

  sendRegistrationEmail(email: string) {
    console.log('Sending registration email to:', email);
  }
}
