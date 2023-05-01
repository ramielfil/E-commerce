package com.example.e_commerce.Api;


import com.example.e_commerce.Model.Commande;
import com.example.e_commerce.Repository.Commande_Repository;
import com.example.e_commerce.Service.Commande_service;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/commande/")
public class commande_api {
    @Autowired
    Commande_service commandeService;

    @GetMapping("GetAll")
    private List<Commande> GetAll(){
        return commandeService.GetAll();
    }

    @PostMapping("Add")
    private ResponseEntity<String> Add(@RequestBody Commande commande){
        commandeService.Add(commande);
        return new ResponseEntity<>("saved_commande", HttpStatus.CREATED);
    }

    @GetMapping("GetOne/{ref_commande}")
    private Commande Getone(@PathVariable("ref_commande") Long ref_commande){
        return commandeService.GetOne(ref_commande);
    }

    @DeleteMapping("Delete/{ref_commande}")
    private ResponseEntity<String> Delete(@PathVariable("ref_commande") Long ref_commande){
        commandeService.Delete(ref_commande);
        return new ResponseEntity<>("deleted_commande", HttpStatus.OK);
    }

    @PutMapping("update_adresse/{ref_commande}")
    private ResponseEntity<String> update(@PathVariable("ref_commande") Long ref_commande ,@RequestParam("adresse") String adresse ){
        commandeService.Update_adresse(ref_commande, adresse);
        return new ResponseEntity<>("updted_commande", HttpStatus.OK);
    }
    @PutMapping("update_statut/{ref_commande}")
    private ResponseEntity<String> updatestatut(@PathVariable("ref_commande") Long ref_commande ,@RequestParam("statut") String statut ){
        commandeService.Update_statut(ref_commande, statut);
        return new ResponseEntity<>("updted_commande", HttpStatus.OK);
    }
}

