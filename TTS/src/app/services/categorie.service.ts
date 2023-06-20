import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators }from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http :  HttpClient) { }


  public Register(obj :any):Observable<any>
  {
    return this.http.post('http://localhost:8080/api/categorie/Add',obj,{responseType : 'text'});
  }


  public GetProduitsByCategorie(ref_categorie: number): Observable<any> {
    const url = `http://localhost:8080/api/categorie/GetProduitsByCategorie/${ref_categorie}`;
    return this.http.get(url);
  }
  public GetAll():Observable<any>
  {
    return this.http.get('http://localhost:8080/api/categorie/GetAll');
  }

  public GetOne(id : number)
  {
    return this.http.get('http://localhost:8080/api/categorie/GetOne/'+id)
  }

  public update(obj : any):Observable<any>
  {
    return this.http.put('http://localhost:8080/api/categorie/update_all',obj,{responseType : 'text'})
  }

  public Delete(id : Number)
  {
    return this.http.delete('http://localhost:8080/api/categorie/Delete/'+id,{responseType : 'text'})
  }

}
