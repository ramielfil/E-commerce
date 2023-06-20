import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { commande } from 'src/app/model/commande';
import { commandeservice } from 'src/app/services/commande.service';

@Component({
  selector: 'app-mes-reservations',
  templateUrl: './mes-reservations.component.html',
  styleUrls: ['./mes-reservations.component.css']
})
export class MesReservationsComponent {

  constructor(private commandeservice : commandeservice , private router : Router){}

ngOnInit():void{
  this.getAll()
}


commandes : commande[]
selectedCommande: commande;
commande : any
getAll() {
  const loginClient = Number(localStorage.getItem("login_client")); // Parse the login_client value to a number if it's a string
  this.commandeservice.GetAll().subscribe(
    data => {
      console.log(data);
      this.commandes = data.filter(commande => commande.my_user.id === loginClient);
    }
  );
}
afficher2(id : Number,etat)
{ 
  localStorage.setItem("ref_commande",String(id));
  localStorage.setItem("etat",String(etat));

  console.log(id)
  
}
  afficher(id : Number)
  { 
    localStorage.setItem("ref_commande",String(id));
    this.router.navigateByUrl('client/details-commande');
    
  }
}
