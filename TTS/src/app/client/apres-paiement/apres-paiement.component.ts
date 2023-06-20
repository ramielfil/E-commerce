import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-apres-paiement',
  templateUrl: './apres-paiement.component.html',
  styleUrls: ['./apres-paiement.component.css']
})
export class ApresPaiementComponent {
  constructor(private router: Router){}
  
  ngOnInit(): void {
  }
}
