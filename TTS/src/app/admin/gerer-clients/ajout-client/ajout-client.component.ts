  import { NgForm } from '@angular/forms';
  import { timer } from 'rxjs';
  import { take } from 'rxjs/operators';
  import {ActivatedRoute, Router} from '@angular/router';
  import { response } from 'express';
  import { MyuserService } from 'src/app/services/my_user.service';
  import { Component, ChangeDetectorRef } from '@angular/core';

  @Component({
    selector: 'app-ajout-client',
    templateUrl: './ajout-client.component.html',
    styleUrls: ['./ajout-client.component.css']
  })
  export class AjoutClientComponent {
    constructor(private router: Router, private service_client: MyuserService, private changeDetectorRef: ChangeDetectorRef) {}
    showAlert: boolean = false;
    hideAlert() {
      this.showAlert = false;
    }
    navigateToClients() {
      this.router.navigateByUrl('consulter-clients');
    }
    ngOnInit(): void {
    }
    gotologin(){
      this.router.navigate(["/login"])
    }


    register(form_login : NgForm){
      console.log("i am work ");
    console.log(form_login.value)
    form_login.form.value['role']='client'
      if (form_login.value.password != form_login.value.confirmpassword)
      {alert("confirmer votre mot de passe")}
      else {
        this.showAlert = true;
        
        this.service_client.Register(form_login.value).subscribe(
          (response : any) =>{
            console.log(response);
          }
          
        )

      }
    }}

