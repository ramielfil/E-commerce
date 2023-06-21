import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { my_user } from 'src/app/model/my_user';
import { MyuserService } from 'src/app/services/my_user.service';

@Component({
  selector: 'app-consulter-fournisseurs',
  templateUrl: './consulter-fournisseurs.component.html',
  styleUrls: ['./consulter-fournisseurs.component.css']
})
export class ConsulterFournisseursComponent {



  constructor(private fournisseurservice : MyuserService , private router : Router){}
  showAlert: boolean = false;
  hideAlert() {
    this.showAlert = false;
  }
  navigateTo() {
    this.router.navigateByUrl('consulter-fournisseurs');
  }
ngOnInit():void{
  this.getAll()
}

fournisseurs : my_user[]
getAll()
{
  this.fournisseurservice.GetAll('fournisseur').subscribe(
    data =>{
      console.log(data);
      this.fournisseurs=data;
    }
  )

}

  Modif(id : Number)
  { 
    localStorage.setItem("id_fournisseur",String(id));
    this.router.navigateByUrl('consulter-fournisseurs/modifier');
  }

  supp(id : Number)
  {
    this.showAlert = true;

    this.fournisseurservice.Delete(id).subscribe(
      data =>{
       alert(data)
       this.getAll()
      }
    )
  }
}
