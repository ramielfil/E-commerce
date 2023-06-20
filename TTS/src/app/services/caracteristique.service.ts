import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaracteristiqueService {

  constructor(private http :  HttpClient) { }

  public Register(obj :any):Observable<any>
  {
    return this.http.post('http://localhost:8080/api/caracteristique/Add',obj,{responseType : 'text'});
  }

  public GetAll(role : any):Observable<any>
  {
    return this.http.get('http://localhost:8080/api/caracteristique/allbyrole/'+role);
  }

  public GetOne(id : number)
  {
    return this.http.get('http://localhost:8080/api/caracteristique/GetOne/'+id)
  }

  public update(obj : any):Observable<any>
  {
    return this.http.put('http://localhost:8080/api/caracteristique/update_all',obj,{responseType : 'text'})
  }

  public Delete(id : Number)
  {
    return this.http.delete('http://localhost:8080/api/caracteristique/Delete/'+id,{responseType : 'text'})
  }
}
