package com.example.e_commerce.Api;

import com.example.e_commerce.Model.Produit;

import com.example.e_commerce.Service.Produit_service;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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
    public produit_api(Produit_service produitService) {
        this.produitService = produitService;
    }
    @GetMapping("GetByMarque")
    public List<Produit> getByMarque(@RequestParam("marqueIds") List<Long> marqueIds) {
        return produitService.GetByMarque(marqueIds);
    }



    @PostMapping("Add")
    private ResponseEntity<String> Add(@RequestBody Produit produit){
        produitService.Add(produit);
        return new ResponseEntity<>("saved_Marque", HttpStatus.CREATED);
    }

    @PostMapping("addimage")
    public ResponseEntity<?> uploadImage(@RequestParam("image1") MultipartFile file1,
                                         @RequestParam("desc_produit") String desc_produit,
                                         @RequestParam("nom_produit") String nom_produit,
                                         @RequestParam("prix_produit") String prix_produit,
                                         @RequestParam("quantitue_produit") String quantitue_produit,
                                         @RequestParam("stockage") String stockage,
                                         @RequestParam("garantie") String garantie,
                                         @RequestParam("couleur") String couleur,
                                         @RequestParam("taille_ecran") String taille_ecran,
                                         @RequestParam("ram") String ram,
                                         @RequestParam("sim") String sim,
                                         @RequestParam("processeur") String processeur,
                                         @RequestParam("qualite_camera") String qualite_camera,
                                         @RequestParam("graphique") String graphique,
                                         @RequestParam("ref_marque") String ref_marque,
                                         @RequestParam("ref_categorie") String ref_categorie)
            throws IOException {
        String uploadImage = produitService.uploadImage(file1, desc_produit, nom_produit, prix_produit, quantitue_produit,
                stockage, garantie, couleur, taille_ecran, ram, sim, processeur, qualite_camera, graphique,
                ref_marque, ref_categorie);
        return ResponseEntity.status(HttpStatus.OK).body(uploadImage);
    }


    @GetMapping("GetOne/{ref_produit}")
    private Produit Getone(@PathVariable("ref_produit") Long ref_produit){
        return produitService.GetOne(ref_produit);
    }
    @GetMapping("GetOnemarque/{ref_marque}")
    private Produit GetOnemarque(@PathVariable("ref_marque") Long ref_marque){
        return produitService.GetOnemarque(ref_marque);
    }



    @DeleteMapping("Delete/{ref_produit}")
    private ResponseEntity<String> Delete(@PathVariable("ref_produit") Long ref_produit){
        produitService.Delete(ref_produit);
        return new ResponseEntity<>("deleted_produit", HttpStatus.OK);
    }

    @PutMapping("update_quantite/{ref_produit}")
    private ResponseEntity<String> update_quantite(@PathVariable("ref_produit") Long ref_produit ,@RequestParam("quantitue_produit") String quantite_produit ){
        produitService.Update_quantite(ref_produit, quantite_produit);
        return new ResponseEntity<>("updted_produit", HttpStatus.OK);
    }
    @PutMapping("quantite/{ref_produit}")
    private ResponseEntity<String> quantite(@PathVariable("ref_produit") Long ref_produit ,@RequestParam("quantite") int quantite ){
        produitService.quantite(ref_produit, quantite);
        return new ResponseEntity<>(HttpStatus.OK);
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
    private ResponseEntity<String> update_prix(@PathVariable("ref_produit") Long ref_produit ,@RequestParam("prix_produit") String prix_produit ){
        produitService.Update_prix(ref_produit, prix_produit);
        return new ResponseEntity<>("updted_produit", HttpStatus.OK);
    }
    @PutMapping("update_all")
    private ResponseEntity<String> update_all(@RequestBody Produit produit){
        produitService.update_all_fileds(produit);
        return new ResponseEntity<>("updated_produit", HttpStatus.OK);
    }


    @PutMapping("update_stockage/{ref_caracteristique}")
    private ResponseEntity<String> updatestockage(@PathVariable("ref_caracteristique") Long ref_caracteristique ,@RequestParam("stockage") String stockage ){
        produitService.Update_stockage(ref_caracteristique, stockage);
        return new ResponseEntity<>("updted_stockage", HttpStatus.OK);
    }
    @PutMapping("update_garantie/{ref_caracteristique}")
    private ResponseEntity<String> updategarantie(@PathVariable("ref_caracteristique") Long ref_caracteristique ,@RequestParam("garantie") String garantie ){
        produitService.Update_garantie(ref_caracteristique, garantie);
        return new ResponseEntity<>("updted_garantie", HttpStatus.OK);
    }
    @PutMapping("update_couleur/{ref_caracteristique}")
    private ResponseEntity<String> updatecouleur(@PathVariable("ref_caracteristique") Long ref_caracteristique ,@RequestParam("couleur") String couleur ){
        produitService.Update_couleur(ref_caracteristique, couleur);
        return new ResponseEntity<>("updted_couleur", HttpStatus.OK);
    }
    @PutMapping("update_taille_ecran/{ref_caracteristique}")
    private ResponseEntity<String> updatetille_ecran(@PathVariable("ref_caracteristique") Long ref_caracteristique ,@RequestParam("taille_ecran") String taille_ecran ){
        produitService.Update_taille_ecran(ref_caracteristique, taille_ecran);
        return new ResponseEntity<>("updted_taille_ecran", HttpStatus.OK);
    }
    @PutMapping("update_ram/{ref_caracteristique}")
    private ResponseEntity<String> updateram(@PathVariable("ref_caracteristique") Long ref_caracteristique ,@RequestParam("ram") String ram ){
        produitService.Update_ram(ref_caracteristique, ram);
        return new ResponseEntity<>("updted_ram", HttpStatus.OK);
    }
    @PutMapping("update_sim/{ref_caracteristique}")
    private ResponseEntity<String> updatesim(@PathVariable("ref_caracteristique") Long ref_caracteristique ,@RequestParam("sim") String sim ){
        produitService.Update_sim(ref_caracteristique, sim);
        return new ResponseEntity<>("updted_sim", HttpStatus.OK);
    }
    @PutMapping("update_processeur/{ref_caracteristique}")
    private ResponseEntity<String> updateprocesseur(@PathVariable("ref_caracteristique") Long ref_caracteristique ,@RequestParam("processeur") String processeur ){
        produitService.Update_processeur(ref_caracteristique, processeur);
        return new ResponseEntity<>("updted_processeur", HttpStatus.OK);
    }
    @GetMapping("{ref_produit}")
    public ResponseEntity<?> downloadImage(@PathVariable Long ref_produit){
        byte[] imageData1=produitService.downloadImage(ref_produit);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(imageData1);
    }
}
