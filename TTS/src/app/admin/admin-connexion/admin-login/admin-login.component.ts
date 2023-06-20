import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from '../../models/login';
import { Router } from '@angular/router';
import { MyuserService } from 'src/app/services/my_user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor(private router: Router , private my_userservice : MyuserService){}

  email: string;
  password: string;
  showAlert: boolean = false;
  showAlert2: boolean = true; // Flag to control the visibility of the alert

  closeAlert() {
    this.showAlert2 = false;
  }
  hideAlert() {
    this.showAlert = false;
  }

  ngOnInit(): void {
  }
  gotoregitre(){
    this.router.navigate(["/regitre"])
  }


  selectedRole: string; // propriété pour stocker le rôle sélectionné

  onSubmit(form_login: NgForm) {
    console.log("i am work ");
    if (form_login.value.password === "" || form_login.value.email === "") {
      this.showAlert = true;
    } else {
      const role = this.selectedRole; // Utilisez le rôle sélectionné dans le champ de sélection
      this.my_userservice.login(form_login.value.email, form_login.value.password, this.selectedRole)
      .subscribe(response => {
        console.log('User logged in successfully');
        console.log(form_login.value);
        console.log(response);
        
        const role = response.role;
        console.log(role);
        
        if (role === 'fournisseur') {
          localStorage.setItem("login_fournisseur", String(response.id));
          this.router.navigate(['/fournisseur/conuslter-produits']);
        } else if (role === 'admin') {
          localStorage.setItem("login_admin", String(response.id));
          this.router.navigate(['/admin-index']);
        } else {
          localStorage.setItem("login_livreur", String(response.id));
          this.router.navigate(['/livreur/consulter-commandes']);
        }
      }, error => {
        this.showAlert2 = true;
      });
    }
  }
  


  logout()
  {localStorage.removeItem("login")}

}
