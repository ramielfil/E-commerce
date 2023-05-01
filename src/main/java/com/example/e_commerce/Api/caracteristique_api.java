package com.example.e_commerce.Api;

import com.example.e_commerce.Model.Caracteristique;
import com.example.e_commerce.Repository.Caracteristique_Repository;
import com.example.e_commerce.Service.Caracteristique_service;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/caracteristique/")
public class caracteristique_api {
    @Autowired
    Caracteristique_service caracteristiqueService;

    @GetMapping("GetAll")
    private List<Caracteristique> GetAll(){
        return caracteristiqueService.GetAll();
    }

    @PostMapping("Add")
    private ResponseEntity<String> Add(@RequestBody Caracteristique caracteristique){
        caracteristiqueService.Add(caracteristique);
        return new ResponseEntity<>("saved_Caracteristique", HttpStatus.CREATED);
    }

    @GetMapping("GetOne/{ref_caracteristique}")
    private Caracteristique Getone(@PathVariable("ref_Caracteristique") Long ref_caracteristique){
        return caracteristiqueService.GetOne(ref_caracteristique);
    }

    @DeleteMapping("Delete/{ref_caracteristique}")
    private ResponseEntity<String> Delete(@PathVariable("ref_caracteristique") Long ref_caracteristique){
        caracteristiqueService.Delete(ref_caracteristique);
        return new ResponseEntity<>("deleted Caracteristique", HttpStatus.OK);
    }

    @PutMapping("update_stockage/{ref_caracteristique}")
    private ResponseEntity<String> updatestockage(@PathVariable("ref_caracteristique") Long ref_caracteristique ,@RequestParam("stockage") String stockage ){
        caracteristiqueService.Update_stockage(ref_caracteristique, stockage);
        return new ResponseEntity<>("updted_stockage", HttpStatus.OK);
    }
    @PutMapping("update_garantie/{ref_caracteristique}")
    private ResponseEntity<String> updategarantie(@PathVariable("ref_caracteristique") Long ref_caracteristique ,@RequestParam("garantie") String garantie ){
        caracteristiqueService.Update_garantie(ref_caracteristique, garantie);
        return new ResponseEntity<>("updted_garantie", HttpStatus.OK);
    }
    @PutMapping("update_couleur/{ref_caracteristique}")
    private ResponseEntity<String> updatecouleur(@PathVariable("ref_caracteristique") Long ref_caracteristique ,@RequestParam("couleur") String couleur ){
        caracteristiqueService.Update_couleur(ref_caracteristique, couleur);
        return new ResponseEntity<>("updted_couleur", HttpStatus.OK);
    }
    @PutMapping("update_taille_ecran/{ref_caracteristique}")
    private ResponseEntity<String> updatetille_ecran(@PathVariable("ref_caracteristique") Long ref_caracteristique ,@RequestParam("taille_ecran") String taille_ecran ){
        caracteristiqueService.Update_taille_ecran(ref_caracteristique, taille_ecran);
        return new ResponseEntity<>("updted_taille_ecran", HttpStatus.OK);
    }
    @PutMapping("update_ram/{ref_caracteristique}")
    private ResponseEntity<String> updateram(@PathVariable("ref_caracteristique") Long ref_caracteristique ,@RequestParam("ram") String ram ){
        caracteristiqueService.Update_ram(ref_caracteristique, ram);
        return new ResponseEntity<>("updted_ram", HttpStatus.OK);
    }
    @PutMapping("update_sim/{ref_caracteristique}")
    private ResponseEntity<String> updatesim(@PathVariable("ref_caracteristique") Long ref_caracteristique ,@RequestParam("sim") String sim ){
        caracteristiqueService.Update_sim(ref_caracteristique, sim);
        return new ResponseEntity<>("updted_sim", HttpStatus.OK);
    }
    @PutMapping("update_processeur/{ref_caracteristique}")
    private ResponseEntity<String> updateprocesseur(@PathVariable("ref_caracteristique") Long ref_caracteristique ,@RequestParam("processeur") String processeur ){
        caracteristiqueService.Update_processeur(ref_caracteristique, processeur);
        return new ResponseEntity<>("updted_processeur", HttpStatus.OK);
    }
}


