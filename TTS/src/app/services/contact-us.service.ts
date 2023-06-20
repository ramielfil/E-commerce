import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { commande } from '../model/commande';

@Injectable({
  providedIn: 'root'

})
export class ContactUsService {

  constructor(private http :  HttpClient) { }
  public envoyer(obj :any):Observable<any>
  {
    return this.http.post('http://localhost:8080/api/contactus/Add',obj,{responseType : 'text'});
  }

  public GetAll():Observable<any>
  {
    return this.http.get('http://localhost:8080/api/contactus/GetAll');
  }
}
