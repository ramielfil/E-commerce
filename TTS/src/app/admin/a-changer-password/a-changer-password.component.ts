import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyuserService } from 'src/app/services/my_user.service';

@Component({
  selector: 'app-a-changer-password',
  templateUrl: './a-changer-password.component.html',
  styleUrls: ['./a-changer-password.component.css']
})
export class AChangerPasswordComponent {
  constructor(private admiService : MyuserService , private router : Router){}
  
  validpassword: boolean = true;
  validconfpassword: boolean = true;
  currentPassword: string;
newPassword: string;
confirmPassword: string;
admindetail: any


  
  checkValidPassword() {
    const passwordInput = <HTMLInputElement>document.getElementById("newPassword");
    const passwordValue = passwordInput.value;
  
    // Vérifier si le mot de passe respecte les critères requis
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d.*\d)[A-Za-z\d]{8,}$/;
    this.validpassword = passwordRegex.test(passwordValue);
  }
  
  checkValidConfPassword() {
    this.validconfpassword = this.confirmPassword === this.newPassword;
  }
  isPasswordMatch(): boolean {
    return this.newPassword === this.confirmPassword;
  }
  
  
  ngOnInit(): void {
    this.Getone();
  }

id : number
admin : any
Getone()
{
  this.id = Number(localStorage.getItem("login_admin"))
  this.admiService.GetOne(this.id).subscribe(
    data =>
    {
      console.log(data)
      this.admin = data
    }
  )
}


save_modif() {
  // Récupérer l'identifiant du admin depuis le local storage
  const adminId = Number(localStorage.getItem('login_admin'));

  // Appeler la méthode GetOne pour obtenir les informations du admin
  this.admiService.GetOne(adminId).subscribe(
    data => {
      this.admindetail = data; // Réponse du service contenant les informations du admin

      // Vérifier si le mot de passe actuel correspond à celui stocké dans la réponse
      if (this.currentPassword !== this.admindetail.password) {
        alert('Mot de passe actuel incorrect');
        return;
      }

      // Vérifier si les mots de passe entrés correspondent
      if (this.newPassword !== this.confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return;
      }

      // Mettre à jour le mot de passe dans le service ou l'API
      this.admindetail.password = this.newPassword; // Mettre à jour le mot de passe dans l'objet admin
      this.admiService.update(this.admindetail).subscribe(
        response => {
          alert('Mot de passe mis à jour avec succès');
        },
        error => {
          console.error('Erreur lors de la mise à jour du mot de passe', error);
          alert('Une erreur est survenue lors de la mise à jour du mot de passe');
        }
      );
    },
    error => {
      console.error('Erreur lors de la récupération des informations du admin', error);
      alert('Une erreur est survenue lors de la récupération des informations du admin');
    }
  );
}

logout() {
  localStorage.removeItem("login_admin");
  window.location.href = "/accueil";
}
}
