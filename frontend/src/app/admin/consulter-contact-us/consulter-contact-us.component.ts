import { Component } from '@angular/core';
import { contact_us } from 'src/app/model/contactus';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-consulter-contact-us',
  templateUrl: './consulter-contact-us.component.html',
  styleUrls: ['./consulter-contact-us.component.css']
})
export class ConsulterContactUsComponent {
  constructor(private ContactUsService : ContactUsService ){}

ngOnInit():void{
  this.getAll()
}

contact_us : contact_us[]
  getAll()
  {
    this.ContactUsService.GetAll().subscribe(
      data =>{
        console.log(data);
        this.contact_us=data;
      }
    )

  }
}
