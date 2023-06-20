import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import { response } from 'express';
import { marque } from 'src/app/model/marque';
import { marqueServiceService } from 'src/app/services/marque.service';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators }
  from '@angular/forms';
@Component({
  selector: 'app-ajout-marque',
  templateUrl: './ajout-marque.component.html',
  styleUrls: ['./ajout-marque.component.css']
})
export class AjoutMarqueComponent implements OnInit{
  userFile;
  imgURL : any ;
  public imagePath;
  public message : string;


  constructor(private router: Router , public service_marque : marqueServiceService ){}
  showAlert: boolean = false;
  hideAlert() {
    this.showAlert = false;
  }
  navigateToClients() {
    this.router.navigateByUrl('consulter-marques');
  }
  ngOnInit(): void {
  }
  gotologin(){
    this.router.navigate(["/login"])
  }



  register(form_login : NgForm){
    console.log("i am work ");
    console.log(form_login.value)
    if (form_login.value.nom_marque =="")
     {alert(" saisir Le nom du nouvelle marque")}
    else
      {              this.showAlert = true;

      this.service_marque.uploadImage(this.userFile,form_login.value.nom_marque).subscribe(
        (response : any) =>{
          console.log(response);
        }
        
      )

    }
  }


  
    // infoForm() {
    //   this.service_marque.dataForm = this.fb.group({
    //     id: null,
    //     nom_marque: ['', [Validators.required]],
    //     libelle: ['', [Validators.required]],
  
    //   });
    // }
    // onSubmit() {
    //     this.addData();
    //     console.log("hello ! ")
    // }
    // formGroup() {
    //   this.service_marque.dataForm.reset();
    // }
  
  
  
    
      // onFileChange(event: any) {
      //   const file = event.target.files[0];
      //   this.dataForm.get('file').setValue(file);
      // }
    
      // onSubmit() {
      //   const formData = new FormData();
      //   formData.append('nom_marque', this.dataForm.get('nom_marque').value);
      //   formData.append('img_url', this.dataForm.get('img_url').value);
      //   formData.append('img_File', this.dataForm.get('img_File').value);
      //   formData.append('file', this.dataForm.get('file').value);
      //   this.service_marque.savemarque(formData).subscribe(
      //     response => {
      //       console.log(response);
      //       // Ajoutez ici le code pour afficher une confirmation de réussite de l'opération
      //     },
      //     error => {
      //       console.log(error);
      //       // Ajoutez ici le code pour afficher un message d'erreur
      //     }
      //   );
      // }
      onSelectFile(event){
  if (event.target.files.length >0){
    const file =event.target.files[0];
    this.userFile = file;
    //this.f['profil'].setValue(File);

    var mimeType = event.target.files[0].type;
    if(mimeType.match(/image\/*/) == null){
      this.message = "only image are supported ";
      return;
    }
    var reader = new FileReader();
    this.imagePath = file;
    reader.readAsDataURL(file);
    reader.onload = (_event) =>{this.imgURL = reader.result ; }
    
  }
}
    }

  // prepareFormData(marque: marque ):FormData{
  //   const formData = new FormData();
  //   formData.append(
  //     'marque'
  //   )
  // }
//   onFileselected(event){
//     console.log(event)
// if (event.target.files ) {
//   const file_image = event.target.files[0]

//   const filehandle : marque = {
//     img_file : file_image,
//     img_url : this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file_image)),
//   }

// } 

// }



// addData(){
//   const formData = new FormData();
//   const marque = this.service_marque.dataForm.value;
//   formData.append('marque',JSON.stringify(marque));
//   formData.append('file',this.userFile);
//   this.service_marque.createData(formData).subscribe(data => {this.router.navigate(['/consulter-marques']) });
// }
 
