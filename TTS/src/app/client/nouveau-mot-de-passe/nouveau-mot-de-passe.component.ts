import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyuserService } from 'src/app/services/my_user.service';

@Component({
  selector: 'app-nouveau-mot-de-passe',
  templateUrl: './nouveau-mot-de-passe.component.html',
  styleUrls: ['./nouveau-mot-de-passe.component.css']
})
export class NouveauMotDePasseComponent {
  constructor(private router: Router, private myUserService: MyuserService) {}

  validpassword: boolean = true;
  newPassword: string;
  confirmPassword: string;
  
  checkValidPassword() {
    const passwordInput = <HTMLInputElement>document.getElementById("newPassword");
    console.log(passwordInput);
    console.log(this.confirmPassword);
    const passwordValue = passwordInput.value;
  
    // Vérifier si le mot de passe respecte les critères requis
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    this.validpassword = passwordRegex.test(passwordValue);
    console.log(this.validpassword);
  }
  
  save_modif() {
    // Récupérer l'identifiant du client depuis le local storage
    const email = localStorage.getItem('resetEmail');
  // Récupérer la valeur du champ de confirmation du mot de passe
  this.confirmPassword = (document.getElementById("confirmPassword") as HTMLInputElement).value;
    // Vérifier si les mots de passe entrés correspondent
    if (this.newPassword !== this.confirmPassword) {
      // Les mots de passe correspondent
      alert('Les mots de passe ne correspondent pas');
      return;
    }else{
  
   
  
    // Mettre à jour le mot de passe dans le service ou l'API
    this.myUserService.updatePasswordByEmail(email, this.newPassword).subscribe(
      response => {
        alert('Mot de passe mis à jour avec succès');
        this.router.navigate(['/login']);

      },
      error => {
        console.error('Erreur lors de la mise à jour du mot de passe', error);
        alert('Une erreur est survenue lors de la mise à jour du mot de passe');
      }
    );
  }}
  
  
}