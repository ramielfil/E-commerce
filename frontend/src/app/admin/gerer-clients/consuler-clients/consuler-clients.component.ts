import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { my_user } from 'src/app/model/my_user';
import { MyuserService } from 'src/app/services/my_user.service';

@Component({
  selector: 'app-consuler-clients',
  templateUrl: './consuler-clients.component.html',
  styleUrls: ['./consuler-clients.component.css']
})
export class ConsulerClientsComponent {

  constructor(private clientservice : MyuserService , private router : Router){}

ngOnInit():void{
  this.getAll()
}

clients : my_user[]
  getAll()
  {
    this.clientservice.GetAll('client').subscribe(
      data =>{
        console.log(data);
        this.clients=data;
      }
    )

  }

  Modif(id : Number)
  { 
    localStorage.setItem("id_client",String(id));
    this.router.navigateByUrl('consulter-clients/modifier');
  }

  supp(id : Number)
  {
    this.clientservice.Delete(id).subscribe(
      data =>{
       alert(data)
       this.getAll()
      }
    )
  }
}
