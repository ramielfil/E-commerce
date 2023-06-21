import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyuserService } from 'src/app/services/my_user.service';

@Component({
  selector: 'app-f-modifier-password',
  templateUrl: './f-modifier-password.component.html',
  styleUrls: ['./f-modifier-password.component.css']
})
export class FModifierPasswordComponent {
  constructor(private fournisseurservice : MyuserService , private router : Router){}
  
  validpassword: boolean = true;
  validconfpassword: boolean = true;
  currentPassword: string;
newPassword: string;
confirmPassword: string;
fournisseurdetail: any


  
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


save_modif() {
  // Récupérer l'identifiant du fournisseur depuis le local storage
  const fournisseurId = Number(localStorage.getItem('login_fournisseur'));

  // Appeler la méthode GetOne pour obtenir les informations du fournisseur
  this.fournisseurservice.GetOne(fournisseurId).subscribe(
    data => {
      this.fournisseurdetail = data; // Réponse du service contenant les informations du fournisseur

      // Vérifier si le mot de passe actuel correspond à celui stocké dans la réponse
      if (this.currentPassword !== this.fournisseurdetail.password) {
        alert('Mot de passe actuel incorrect');
        return;
      }

      // Vérifier si les mots de passe entrés correspondent
      if (this.newPassword !== this.confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return;
      }

      // Mettre à jour le mot de passe dans le service ou l'API
      this.fournisseurdetail.password = this.newPassword; // Mettre à jour le mot de passe dans l'objet fournisseur
      this.fournisseurservice.update(this.fournisseurdetail).subscribe(
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
      console.error('Erreur lors de la récupération des informations du fournisseur', error);
      alert('Une erreur est survenue lors de la récupération des informations du fournisseur');
    }
  );
}

logout() {
  localStorage.removeItem("login_fournisseur");
  window.location.href = "/accueil";
}
}
