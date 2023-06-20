import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyuserService } from 'src/app/services/my_user.service';
@Component({
  selector: 'app-confimer-code',
  templateUrl: './confimer-code.component.html',
  styleUrls: ['./confimer-code.component.css']
})
export class ConfimerCodeComponent {
  code : String;
  enteredCode: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.code = params['code'];
    });
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.enteredCode = form.value.code;

      if (this.enteredCode === this.code) {
        alert("Le code a été correctement vérifié.");
        this.router.navigate(['/NouveauMDP']);
      } else {
        alert("Les codes ne correspondent pas.");
      }
    }
  }
  

}