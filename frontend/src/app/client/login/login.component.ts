import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { MyuserService } from 'src/app/services/my_user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router , private my_userservice : MyuserService){}

  email: string;
  password: string;
  role : string = "client";

  ngOnInit(): void {
  }
  gotoregitre(){
    this.router.navigate(["/regitre"])
  }


  onSubmit(form_login : NgForm){
    console.log("i am work ");
    if ((form_login.value.password =="")||(form_login.value.email==""))
     {alert("Champ Obligatoire")}
    else{
     this.my_userservice.login(form_login.value.email, form_login.value.password,'client')
  .subscribe(response => {
    console.log('User logged in successfully');
    console.log(form_login.value);
    console.log(response);    
    localStorage.setItem("login_client",String(response.id))
    this.router.navigate(['/accueil']);
  }, error => {
    //console.error('Error logging in', error);
    // handle the error here
    alert("wrong password")
  });
}
  } 


  logout()
  {localStorage.removeItem("login")}
}
