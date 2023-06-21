import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { commande } from 'src/app/model/commande';
import { contact_us } from 'src/app/model/contactus';
import { my_user } from 'src/app/model/my_user';
import { produit } from 'src/app/model/produit';
import { commandeservice } from 'src/app/services/commande.service';
import { ContactUsService } from 'src/app/services/contact-us.service';
import { MyuserService } from 'src/app/services/my_user.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor(private myuserService : MyuserService ,private produitService : ProduitService,
    private commandeService : commandeservice, private contactusService : ContactUsService,
    private router : Router){}
  totalUsers: number;
  totalLivreurs: number;
  totalFournisseurs: number;
  totalProduits: number;
  totalcommandes: number;
  totalRequetes: number;

  ngOnInit():void{
    this.getAllUser()
    this.getAllProduit()
    this.getAllCommande()
    this.getAllContactUs()
  }
  
  myuser : my_user[]
  produit : produit[]
  commande : commande[]
  contactus : contact_us[]
  totalMontant: number;
  firstCommandYear: string;
  totalMontantCurrentMonth: number; 
  totalMontantCurrentDay : number;

  getAllContactUs() {
    this.contactusService.GetAll().subscribe(
      data => {
        console.log(data);
        this.contactus = data;
        this.totalRequetes = this.contactus.length;
      }
    );
  }
  getAllUser() {
    this.myuserService.GetAll('client').subscribe(
      data => {
        console.log(data);
        this.myuser = data;
        this.totalUsers = this.myuser.length;
      }
    );
    this.myuserService.GetAll('livreur').subscribe(
      data => {
        console.log(data);
        this.myuser = data;
        this.totalLivreurs = this.myuser.length;
      }
    );
    this.myuserService.GetAll('fournisseur').subscribe(
      data => {
        console.log(data);
        this.myuser = data;
        this.totalFournisseurs = this.myuser.length;
      }
    );
  }
  getAllProduit() {
    this.produitService.GetAll().subscribe(
      data => {
        console.log(data);
        this.produit = data;
        this.totalProduits = this.produit.length;
      }
    );
  }
  getAllCommande() {
    this.commandeService.GetAll().subscribe(
      data => {
        console.log(data);
        this.commande = data;
        this.totalcommandes = this.commande.length;
  
        // Calculate total montant
        let totalMontant = 0;
        this.commande.forEach(commande => {
          if (commande.montant) {
            totalMontant += commande.montant;
          }
        });
        console.log('Total Montant:', totalMontant);
  
        // Find the year of the first command
        let firstCommandYear = '';
        if (this.commande.length > 0) {
          const firstCommandDateString = this.commande[0].date_commande;
          const firstCommandDate = new Date(firstCommandDateString);
          console.log('First Command Date:', firstCommandDate);
          if (!isNaN(firstCommandDate.getTime())) {
            const year = firstCommandDate.getFullYear();
            firstCommandYear = year.toString();
          }
        }
        console.log('First Command Year:', firstCommandYear);
  
        // Calculate total montant for current month
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        let totalMontantCurrentMonth = 0;
  
        // Calculate total montant for current day
        const currentDay = currentDate.getDate();
        let totalMontantCurrentDay = 0;
  
        this.commande.forEach(commande => {
          const commandDate = new Date(commande.date_commande);
          const commandYear = commandDate.getFullYear();
          const commandMonth = commandDate.getMonth() + 1;
          const commandDay = commandDate.getDate();
  
          if (commandYear === currentYear && commandMonth === currentMonth && commande.montant) {
            totalMontantCurrentMonth += commande.montant;
          }
  
          if (commandYear === currentYear && commandMonth === currentMonth && commandDay === currentDay && commande.montant) {
            totalMontantCurrentDay += commande.montant;
          }
        });
  
        console.log('Total Montant Current Month:', totalMontantCurrentMonth);
        console.log('Total Montant Current Day:', totalMontantCurrentDay);
  
        // Assign the calculated total montant, first command year, total montant for current month, and total montant for current day
        this.totalMontant = totalMontant;
        this.firstCommandYear = firstCommandYear;
        this.totalMontantCurrentMonth = totalMontantCurrentMonth;
        this.totalMontantCurrentDay = totalMontantCurrentDay;
      },
      error => {
        console.error('Error retrieving commandes:', error);
      }
    );
  }
  
  
  
  
 
  
  
  
  
  
}
