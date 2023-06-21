import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyuserService } from 'src/app/services/my_user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  email: string;
  verificationCode: string;

  constructor(private router: Router, private myUserService: MyuserService) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const email = form.value.email;
      localStorage.setItem('resetEmail', email); // Stockage de l'e-mail dans le local storage
      this.myUserService.checkEmail(email).subscribe(
        (resetCode: string) => {
          if (resetCode) {
            alert("Un code a été envoyé dans votre email.");
            this.router.navigate(['/confirmer-code'], { queryParams: { code: resetCode } });
          } else {
            alert("Veuillez vérifier votre email.");
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }
}
