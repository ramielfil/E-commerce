import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators }from '@angular/forms';
import { produit } from '../model/produit';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  public dataForm: FormGroup;
  private apiUrl = 'http://localhost:8080'; // Remplacez par l'URL de votre API


  constructor(private http :  HttpClient) { }
  public GetAll():Observable<any>
  {
    return this.http.get('http://localhost:8080/api/produit/GetAll');
  }

  public GetOne(id : number)
  {
    return this.http.get('http://localhost:8080/api/produit/GetOne/'+id)
  }

  public GetOnemarque(ref_marque: string | number) {
    return this.http.get<any>('http://localhost:8080/api/produit/GetOnemarque/' + ref_marque);
  }

  GetByMarque(marqueIds: number[]): Observable<produit[]> {
    const params = new HttpParams().set('marqueIds', marqueIds.join(','));
    const url = `${this.apiUrl}/api/produit/GetByMarque`;
    return this.http.get<produit[]>(url, { params });
  }
  public GetProduitsByCategorie(ref_categorie: number): Observable<any> {
    const url = `http://localhost:8080/api/categorie/GetProduitsByCategorie/${ref_categorie}`;
    return this.http.get(url);
  }

  public update(obj : any):Observable<any>
  {
    return this.http.put('http://localhost:8080/api/produit/update_all',obj,{responseType : 'text'})
  }






  public Delete(id : Number)
  {
    return this.http.delete('http://localhost:8080/api/produit/Delete/'+id,{responseType : 'text'})
  }

  public Register(formData : FormData):Observable<any> {
    return this.http.post('http://localhost:8080/api/produit/Add', formData, {responseType : 'text'});
  }
  uploadImage(file1: File, desc_produit: string, nom_produit: string, prix_produit: string,
    quantitue_produit: string, stockage: string, garantie: string, couleur: string,
    taille_ecran: string, ram: string, sim: string, processeur: string, qualite_camera: string,
    graphique: string, ref_marque: string, ref_categorie: string): Observable<any> {
const formData = new FormData();
formData.append('image1', file1);
formData.append('desc_produit', desc_produit);
formData.append('nom_produit', nom_produit);
formData.append('prix_produit', prix_produit);
formData.append('quantitue_produit', quantitue_produit);
formData.append('stockage', stockage);
formData.append('garantie', garantie);
formData.append('couleur', couleur);
formData.append('taille_ecran', taille_ecran);
formData.append('ram', ram);
formData.append('sim', sim);
formData.append('processeur', processeur);
formData.append('qualite_camera', qualite_camera);
formData.append('graphique', graphique);
formData.append('ref_marque', (ref_marque));
formData.append('ref_categorie', (ref_categorie));

return this.http.post('http://localhost:8080/api/produit/addimage', formData, { responseType: 'text' });
}


  // public Register(formData: FormData): Observable<any> {
  //   return this.http.post('http://localhost:8080/api/marque/Add', formData, { responseType: 'text' });
  // }

  public savemarque(formData: FormData): Observable<any> {
    return this.http.post('http://localhost:8080/api/produit/savemarque', formData, { responseType: 'text' });
  }
}
