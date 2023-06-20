import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { commande } from '../model/commande';

@Injectable({
  providedIn: 'root'
})
export class commandeservice {

  constructor(private http :  HttpClient) { }

  public Register(obj :any):Observable<any>
  {
    return this.http.post('http://localhost:8080/api/commande/Add',obj,{responseType : 'text'});
  }

  public GetAll():Observable<any>
  {
    return this.http.get('http://localhost:8080/api/commande/GetAll');
  }

  public GetOne(id : number)
  {
    return this.http.get('http://localhost:8080/api/commande/GetOne/'+id)
  }


  public Delete(id : Number)
  {
    return this.http.delete('http://localhost:8080/api/commande/Delete/'+id,{responseType : 'text'})
  }

  public update_etat(ref_commande: number, etat: string): Observable<any> {
    const url = `http://localhost:8080/api/commande/Update_etat/${ref_commande}?etat=${etat}`;
    return this.http.put(url, { responseType: 'text' });
  }
  public update_statut(ref_commande: number, statut_commande: string): Observable<any> {
    const url = `http://localhost:8080/api/commande/update_statut/${ref_commande}?statut_commande=${statut_commande}`;
    return this.http.put(url, { responseType: 'text' });
  }
  public update(obj : any):Observable<any>
  {
    return this.http.put('http://localhost:8080/api/commande/update_all',obj,{responseType : 'text'})
  }

}
