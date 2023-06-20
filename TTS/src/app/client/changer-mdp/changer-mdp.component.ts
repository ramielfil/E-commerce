import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { my_user } from 'src/app/model/my_user';
import { MyuserService } from 'src/app/services/my_user.service';

@Component({
  selector: 'app-changer-mdp',
  templateUrl: './changer-mdp.component.html',
  styleUrls: ['./changer-mdp.component.css']
})
export class ChangerMdpComponent {
 constructor(private clientservice : MyuserService , private router : Router){}
 showAlert: boolean = false;
 hideAlert() {
   this.showAlert = false;
 }
 navigateTo() {
window.location.reload()  }
  validpassword: boolean = true;
  validconfpassword: boolean = true;
  currentPassword: string;
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

newPassword: string;
confirmPassword: string;
clientdetail: any
save_modif() {
  // Récupérer l'identifiant du client depuis le local storage
  const clientId = Number(localStorage.getItem('login_client'));

  // Appeler la méthode GetOne pour obtenir les informations du client
  this.clientservice.GetOne(clientId).subscribe(
    data => {
      this.clientdetail = data; // Réponse du service contenant les informations du client

      // Vérifier si le mot de passe actuel correspond à celui stocké dans la réponse
      if (this.currentPassword !== this.clientdetail.password) {
        alert('Mot de passe actuel incorrect');
        return;
      }

      // Vérifier si les mots de passe entrés correspondent
      if (this.newPassword !== this.confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return;
      }

      // Mettre à jour le mot de passe dans le service ou l'API
      this.clientdetail.password = this.newPassword; // Mettre à jour le mot de passe dans l'objet client
      this.clientservice.update(this.clientdetail).subscribe(
        response => {
          this.showAlert = true;
        },
        error => {
          console.error('Erreur lors de la mise à jour du mot de passe', error);
          alert('Une erreur est survenue lors de la mise à jour du mot de passe');
        }
      );
    },
    error => {
      console.error('Erreur lors de la récupération des informations du client', error);
      alert('Une erreur est survenue lors de la récupération des informations du client');
    }
  );
}


}
