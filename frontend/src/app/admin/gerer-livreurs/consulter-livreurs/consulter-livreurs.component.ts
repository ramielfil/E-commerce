import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { my_user } from 'src/app/model/my_user';
import { MyuserService } from 'src/app/services/my_user.service';

@Component({
  selector: 'app-consulter-livreurs',
  templateUrl: './consulter-livreurs.component.html',
  styleUrls: ['./consulter-livreurs.component.css']
})
export class ConsulterLivreursComponent {

  constructor(private livreurservice : MyuserService , private router : Router){}

  ngOnInit():void{
    this.getAll()
  }
  
  livreurs : my_user[]
  getAll()
  {
    this.livreurservice.GetAll('livreur').subscribe(
      data =>{
        console.log(data);
        this.livreurs=data;
      }
    )

  }
  
    Modif(id : Number)
    { 
      localStorage.setItem("id_livreur",String(id));
      this.router.navigateByUrl('consulter-livreurs/modifier');
    }
  
    supp(id : Number)
    {
      this.livreurservice.Delete(id).subscribe(
        data =>{
         alert(data)
         this.getAll()
        }
      )
    }
}
