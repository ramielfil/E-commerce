import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators }from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class marqueServiceService {
  public dataForm: FormGroup;

  constructor(private http :  HttpClient) { }

  public Register(formData : FormData):Observable<any> {
    return this.http.post('http://localhost:8080/api/Marque/Add', formData, {responseType : 'text'});
  }



  public savemarque(formData: FormData): Observable<any> {
    return this.http.post('http://localhost:8080/api/Marque/savemarque', formData, { responseType: 'text' });
  }

  public GetAll():Observable<any>
  {
    return this.http.get('http://localhost:8080/api/Marque/GetAll');
  }

  public GetOne(id : number)
  {
    return this.http.get('http://localhost:8080/api/Marque/GetOne/'+id)
  }



  public Getimage(url : string)
  {
    return this.http.get('http://localhost:8080/api/Marque/'+url,{responseType : 'text'})
  }


  public update(obj : any):Observable<any>
  {
    return this.http.put('http://localhost:8080/api/Marque/update_all',obj,{responseType : 'text'})
  }

  public Delete(id : Number)
  {
    return this.http.delete('http://localhost:8080/api/Marque/Delete/'+id,{responseType : 'text'})
  }

  uploadImage(file: File , nom_marque : string) {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('nom_marque',nom_marque);
    return this.http.post('http://localhost:8080/api/Marque/addimage', formData,{responseType : 'text'});
  }
}
