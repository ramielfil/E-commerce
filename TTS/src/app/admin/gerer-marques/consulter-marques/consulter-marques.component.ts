import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { marque } from 'src/app/model/marque';
import { marqueServiceService } from 'src/app/services/marque.service';

@Component({
  selector: 'app-consulter-marques',
  templateUrl: './consulter-marques.component.html',
  styleUrls: ['./consulter-marques.component.css']
})
export class ConsulterMarquesComponent {
  constructor(private marqueservice : marqueServiceService , private router : Router){}

ngOnInit():void{
  this.getAll()
}

marques : marque[]
  getAll()
  {
    this.marqueservice.GetAll().subscribe(
      data =>{
        console.log(data);
        this.marques=data;
      }
    )

  }

  Modif(id : Number)
  { 
    localStorage.setItem("ref_marque",String(id));
    this.router.navigateByUrl('consulter-marques/modifier');
  }

  supp(id : Number)
  {
    this.marqueservice.Delete(id).subscribe(
      data =>{
       alert(data)
       this.getAll()
      }
    )
  }
}
