package com.example.e_commerce.Api;

import com.example.e_commerce.Model.Produit;
import com.example.e_commerce.Repository.Produit_Repository;
import com.example.e_commerce.Service.Produit_service;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/produit/")
public class produit_api {
    @Autowired
    Produit_service produitService;

    @GetMapping("GetAll")
    private List<Produit> GetAll(){
        return produitService.GetAll();
    }

    @PostMapping("Add")
    private ResponseEntity<String> Add(@RequestBody Produit produit){
        produitService.Add(produit);
        return new ResponseEntity<>("saved_produit", HttpStatus.CREATED);
    }

    @GetMapping("GetOne/{ref_produit}")
    private Produit Getone(@PathVariable("ref_produit") Long ref_produit){
        return produitService.GetOne(ref_produit);
    }

    @DeleteMapping("Delete/{ref_produit}")
    private ResponseEntity<String> Delete(@PathVariable("ref_produit") Long ref_produit){
        produitService.Delete(ref_produit);
        return new ResponseEntity<>("deleted_produit", HttpStatus.OK);
    }

    @PutMapping("update_quantite/{ref_produit}")
    private ResponseEntity<String> update_quantite(@PathVariable("ref_produit") Long ref_produit ,@RequestParam("quantite_produit") int quantite_produit ){
        produitService.Update_quantite(ref_produit, quantite_produit);
        return new ResponseEntity<>("updted_produit", HttpStatus.OK);
    }
    @PutMapping("update_nom/{ref_produit}")
    private ResponseEntity<String> update_nom(@PathVariable("ref_produit") Long ref_produit ,@RequestParam("nom_produit") String nom_produit ){
        produitService.Update_nomproduit(ref_produit, nom_produit);
        return new ResponseEntity<>("updted_produit", HttpStatus.OK);
    }
    @PutMapping("update_description/{ref_produit}")
    private ResponseEntity<String> update_description(@PathVariable("ref_produit") Long ref_produit ,@RequestParam("description_produit") String description_produit ){
        produitService.Update_description(ref_produit, description_produit);
        return new ResponseEntity<>("updted_produit", HttpStatus.OK);
    }
    @PutMapping("update_prix/{ref_produit}")
    private ResponseEntity<String> update_prix(@PathVariable("ref_produit") Long ref_produit ,@RequestParam("prix_produit") float prix_produit ){
        produitService.Update_prix(ref_produit, prix_produit);
        return new ResponseEntity<>("updted_produit", HttpStatus.OK);
    }
    @PutMapping("update_statut/{ref_produit}")
    private ResponseEntity<String> update_statut(@PathVariable("ref_produit") Long ref_produit ,@RequestParam("statut_produit") int statut_produit ){
        produitService.Update_statut(ref_produit, statut_produit);
        return new ResponseEntity<>("updted_produit", HttpStatus.OK);
    }

}

