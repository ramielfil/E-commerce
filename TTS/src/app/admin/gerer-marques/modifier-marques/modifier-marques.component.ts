import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { marque } from 'src/app/model/marque';
import { marqueServiceService } from 'src/app/services/marque.service';

@Component({
  selector: 'app-modifier-marques',
  templateUrl: './modifier-marques.component.html',
  styleUrls: ['./modifier-marques.component.css']
})
export class ModifierMarquesComponent {
  constructor(private marqueservice : marqueServiceService , private router : Router){}
  showAlert: boolean = false;
  hideAlert() {
    this.showAlert = false;
  }
  navigateToClients() {
    this.router.navigateByUrl('consulter-marques');
  }
  ngOnInit():void{
    this.Getone()
  }
  
  id : number
  marque : any
  url1 :any
  Getone()
  {
    this.id = Number(localStorage.getItem("ref_marque"))
    this.marqueservice.GetOne(this.id).subscribe(
      data =>
      {
        console.log(data)
        this.marque = data
      
      }
    )
      
  }

  
  
  new_nom_marque : string
new_logo : any;
  save_modif(marque : marque)
  {console.log("save_modif")
    this.new_nom_marque = (<HTMLInputElement>document.getElementById("nom_marque")).value;
    marque.nom_marque=this.new_nom_marque
    this.showAlert = true;
    console.log(marque);
    this.marqueservice.update(marque).subscribe(
      (response : any) =>{
        console.log(response);
      }
      
    )
  }

  
}
