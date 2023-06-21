package com.example.e_commerce.Api;


import com.example.e_commerce.Model.Categorie;
import com.example.e_commerce.Model.Marque;
import com.example.e_commerce.Model.Produit;
import com.example.e_commerce.Model.my_user;
import com.example.e_commerce.Repository.Categorie_Repository;
import com.example.e_commerce.Repository.Produit_Repository;
import com.example.e_commerce.Service.Categorie_service;
import com.example.e_commerce.Service.Produit_service;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/categorie/")
public class categorie_api {
    @Autowired
    Categorie_service categorieService;
    Produit_service produitService;

    @GetMapping("GetAll")
    private List<Categorie> GetAll(){
        return categorieService.GetAll();
    }

    @PostMapping("Add")
    private ResponseEntity<String> Add(@RequestBody Categorie categorie){
        categorieService.Add(categorie);
        return new ResponseEntity<>("saved_Categorie", HttpStatus.CREATED);
    }
    @GetMapping("GetProduitsByCategorie/{ref_categorie}")
    private List<Produit> GetProduitsByCategorie(@PathVariable("ref_categorie") Long ref_categorie) {
        return categorieService.getProduitsByCategorieId(ref_categorie);
    }

    @GetMapping("GetOne/{ref_categorie}")
    private Categorie Getone(@PathVariable("ref_categorie") Long ref_categorie){
        return categorieService.GetOne(ref_categorie);
    }

    @DeleteMapping("Delete/{ref_categorie}")
    private ResponseEntity<String> Delete(@PathVariable("ref_categorie") Long ref_categorie){
        categorieService.Delete(ref_categorie);
        return new ResponseEntity<>( HttpStatus.OK);
    }

    @PutMapping("update_nom_categorie/{ref_categorie}")
    private ResponseEntity<String> update(@PathVariable("ref_categorie") Long ref_categorie ,@RequestParam("nom_categorie") String nom_categorie ){
        categorieService.Update_nom_categorie(ref_categorie, nom_categorie);
        return new ResponseEntity<>( HttpStatus.OK);
    }
}
