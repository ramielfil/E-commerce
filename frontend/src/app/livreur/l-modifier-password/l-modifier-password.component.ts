import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyuserService } from 'src/app/services/my_user.service';

@Component({
  selector: 'app-l-modifier-password',
  templateUrl: './l-modifier-password.component.html',
  styleUrls: ['./l-modifier-password.component.css']
})
export class LModifierPasswordComponent {
  constructor(private livreurservice : MyuserService , private router : Router){}
  
  validpassword: boolean = true;
  validconfpassword: boolean = true;
  currentPassword: string;
newPassword: string;
confirmPassword: string;
livreurdetail: any


  
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
livreur : any
Getone()
{
  this.id = Number(localStorage.getItem("login_livreur"))
  this.livreurservice.GetOne(this.id).subscribe(
    data =>
    {
      console.log(data)
      this.livreur = data
    }
  )
}


save_modif() {
  // Récupérer l'identifiant du livreur depuis le local storage
  const livreurId = Number(localStorage.getItem('login_livreur'));

  // Appeler la méthode GetOne pour obtenir les informations du livreur
  this.livreurservice.GetOne(livreurId).subscribe(
    data => {
      this.livreurdetail = data; // Réponse du service contenant les informations du livreur

      // Vérifier si le mot de passe actuel correspond à celui stocké dans la réponse
      if (this.currentPassword !== this.livreurdetail.password) {
        alert('Mot de passe actuel incorrect');
        return;
      }

      // Vérifier si les mots de passe entrés correspondent
      if (this.newPassword !== this.confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return;
      }

      // Mettre à jour le mot de passe dans le service ou l'API
      this.livreurdetail.password = this.newPassword; // Mettre à jour le mot de passe dans l'objet livreur
      this.livreurservice.update(this.livreurdetail).subscribe(
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
      console.error('Erreur lors de la récupération des informations du livreur', error);
      alert('Une erreur est survenue lors de la récupération des informations du livreur');
    }
  );
}

logout() {
  localStorage.removeItem("login_livreur");
  window.location.href = "/accueil";
}
}
