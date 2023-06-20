
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { my_user } from '../model/my_user';

@Injectable({
  providedIn: 'root'
})

export class MyuserService {
  private baseUrl = 'http://localhost:8080/api/my_user';
  constructor(private http :  HttpClient) { }

  public Register(obj :any):Observable<any>
  {
    return this.http.post('http://localhost:8080/api/my_user/Add',obj,{responseType : 'text'});
  }

  public GetAll(role : any):Observable<any>
  {
    return this.http.get('http://localhost:8080/api/my_user/allbyrole/'+role);
  }

  public GetOne(id : number)
  {
    return this.http.get('http://localhost:8080/api/my_user/GetOne/'+id)
  }

  public update(obj : any):Observable<any>
  {
    return this.http.put('http://localhost:8080/api/my_user/update_all',obj,{responseType : 'text'})
  }

  public Delete(id : Number)
  {
    return this.http.delete('http://localhost:8080/api/my_user/Delete/'+id,{responseType : 'text'})
  }

  login(email: string, password: string,role : string): Observable<my_user> {
    return this.http.post<my_user>('http://localhost:8080/api/my_user/login', { email, password, role });
  }
  updatePassword(id: number, password: string): Observable<string> {
    const url = `${this.baseUrl}/update_password/${id}`;
    return this.http.put<string>(url, { password });
  }


  checkEmail(email: string): Observable<string> {
    const params = new HttpParams().set('email', email);
    return this.http.get<string>('http://localhost:8080/api/my_user/check-email', { params });
  }

  public getOneByEmail(email : String)
  {
    return this.http.get('http://localhost:8080/api/my_user/getOneByEmail/'+email)
  }

public updatePasswordByEmail(email: string, password: string): Observable<any> {
  const url = 'http://localhost:8080/api/my_user/update_passwordE/' + email;
  
  const params = new HttpParams().set('password', password);
  const headers = new HttpHeaders().set('Content-Type', 'application/json');

  return this.http.put(url, null, { headers, params, responseType: 'text' });
}
}
