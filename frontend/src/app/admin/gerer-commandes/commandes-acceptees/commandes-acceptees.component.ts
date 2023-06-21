import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { commande } from 'src/app/model/commande';
import { commandeservice } from 'src/app/services/commande.service';
@Component({
  selector: 'app-commandes-acceptees',
  templateUrl: './commandes-acceptees.component.html',
  styleUrls: ['./commandes-acceptees.component.css']
})
export class CommandesAccepteesComponent {
  constructor(private commandeservice : commandeservice , private router : Router){}

  ngOnInit():void{
    this.getAll()
  }
  
  
  commandes : commande[]
  
  getAll() {
    this.commandeservice.GetAll().subscribe(
      data => {
        console.log(data);
        this.commandes = data.filter(commande => commande.etat === 'acceptée');
      }
    );
  }
  //  ouvrirDialog(refCommande) {
  //   localStorage.setItem("ref_commande", String(refCommande));
  //   const etatDialog = document.getElementById("etat_dialog");
  //   etatDialog.showModal();
  // }
  afficher2(id : Number)
  { 
    localStorage.setItem("ref_commande",String(id));
    
  }
    afficher(id : Number)
    { 
      localStorage.setItem("ref_commande",String(id));
      this.router.navigateByUrl('consulter-commandes/details');
      
    }
}
