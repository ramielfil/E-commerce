package com.example.e_commerce.Service;

import com.example.e_commerce.Exception.UserNotFoundException;
import com.example.e_commerce.Model.Categorie;
import com.example.e_commerce.Model.Marque;
import com.example.e_commerce.Model.Produit;
import com.example.e_commerce.Model.my_user;
import com.example.e_commerce.Repository.Categorie_Repository;
import com.example.e_commerce.Repository.Marque_Repository;
import com.example.e_commerce.Repository.Produit_Repository;
import com.example.e_commerce.Util.ImageUtils;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@Slf4j
public class Produit_service {

    @Autowired
    private Produit_Repository produitRepository;
    @Autowired
    Marque_Repository marqueRepository;
    @Autowired
    Categorie_Repository categorieRepository;
    public void Add(Produit produit){
        log.info("ADD produit \n");
        produitRepository.save(produit);
    }

    public List<Produit> GetByMarque(List<Long> marqueIds) {
        log.info("Get produits by marqueIds: " + marqueIds);
        try {
            List<Marque> marques = marqueRepository.findAllById(marqueIds);
            if (!marques.isEmpty()) {
                return produitRepository.findByMarqueIn(marques);
            }
        } catch (EmptyResultDataAccessException exception) {
            throw new UserNotFoundException("Marques not found");
        }
        return Collections.emptyList();
    }


    public String uploadImage(MultipartFile file1, String desc_produit, String nom_produit, String prix_produit,
                              String quantitue_produit, String stockage, String garantie, String couleur,
                              String taille_ecran, String ram, String sim, String processeur, String qualite_camera,
                              String graphique,String ref_marque, String ref_categorie) throws IOException {
        Marque marque = marqueRepository.findById(Long.valueOf(ref_marque)).orElse(null);
        Categorie categorie = categorieRepository.findById(Long.valueOf(ref_categorie)).orElse(null);

        if (marque != null && categorie != null) {
            Produit produit = Produit.builder()
                    .name1(file1.getOriginalFilename())
                    .type1(file1.getContentType())
                    .imageData1(ImageUtils.compressImage(file1.getBytes()))
                    .desc_produit(desc_produit)
                    .nom_produit(nom_produit)
                    .prix_produit(prix_produit)
                    .quantitue_produit(quantitue_produit)
                    .stockage(stockage)
                    .garantie(garantie)
                    .couleur(couleur)
                    .taille_ecran(taille_ecran)
                    .ram(ram)
                    .sim(sim)
                    .processeur(processeur)
                    .qualite_camera(qualite_camera)
                    .graphique(graphique)
                    .marque(marque)
                    .categorie(categorie)
                    .build();

            Produit savedProduit = produitRepository.save(produit);
            if (savedProduit != null) {
                return "file uploaded successfully: image 1: " + file1.getOriginalFilename();
            }
        }

        return null;
    }


    public byte[] downloadImage(Long ref_produit){
        Optional<Produit> dbImageData = produitRepository.findById(ref_produit);
        byte[] images= ImageUtils.decompressImage(dbImageData.get().getImageData1());
        return images;
    }

    public List<Produit> GetAll(){
        log.info("Get all produit");
        return  produitRepository.findAll();
    }

    public Produit GetOne(Long ref_produit){
        log.info("Get one with ref_produit "+ref_produit);
        try {
            return produitRepository.findById(ref_produit).get();
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("produit with ref_produit "+ref_produit+" not found");
        }
    }
    public Produit GetOnemarque(Long ref_marque){
        log.info("Get one with ref marque "+ref_marque);
        try {
            return produitRepository.findById(ref_marque).get();
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("produit with ref_produit "+ref_marque+" not found");
        }
    }



    public void Delete(Long ref_produit){
        log.info("Delete produit "+ref_produit);
        try {
            produitRepository.deleteById(ref_produit);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("produit with ref_produit "+ref_produit+" not found");
        }
    }
    public void Update_quantite(Long ref_produit,String quantite){
        log.info("update produit quantité");
        try {
            Produit produit = GetOne(ref_produit);
            produit.setQuantitue_produit(quantite);
            Add(produit);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("produit with ref "+ref_produit+" not found");
        }
    }
    public void quantite(Long ref_produit,int quantite){
        log.info("update produit quantité");
        try {
            Produit produit = GetOne(ref_produit);
            produit.setQuantite(quantite);
            Add(produit);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("produit with ref "+ref_produit+" not found");
        }
    }
    public void Update_description(Long ref_produit,String description){
        log.info("update produit description");
        try {
            Produit produit = GetOne(ref_produit);
            produit.setDesc_produit(description);
            Add(produit);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("produit with ref "+ref_produit+" not found");
        }
    }
    public void Update_nomproduit(Long ref_produit,String nom_produit){
        log.info("update produit quantité");
        try {
            Produit produit = GetOne(ref_produit);
            produit.setNom_produit(nom_produit);
            Add(produit);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("produit with ref "+ref_produit+" not found");
        }
    }    public void Update_prix(Long ref_produit,String prix){
        log.info("update produit prix");
        try {
            Produit produit = GetOne(ref_produit);
            produit.setPrix_produit(prix);
            Add(produit);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("produit with ref "+ref_produit+" not found");
        }
    }
    public void update_all_fileds(Produit produit){
        log.info("update_all_fileds");
        produitRepository.save(produit);
    }

    public void Update_stockage(Long ref_caracteristique,String stockage){
        log.info("update Stockage");
        try {
            Produit caracteristique = GetOne(ref_caracteristique);
            caracteristique.setStockage(stockage);
            Add(caracteristique);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Caracteristique with ref_caracteristique "+ref_caracteristique+" not found");
        }
    }
    public void Update_garantie(Long ref_caracteristique,String garantie){
        log.info("update garantie");
        try {
            Produit caracteristique = GetOne(ref_caracteristique);
            caracteristique.setGarantie(garantie);
            Add(caracteristique);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Caracteristique with ref_caracteristique "+ref_caracteristique+" not found");
        }
    }
    public void Update_couleur(Long ref_caracteristique,String couleur){
        log.info("update couleur");
        try {
            Produit caracteristique = GetOne(ref_caracteristique);
            caracteristique.setCouleur(couleur);
            Add(caracteristique);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Caracteristique with ref_caracteristique "+ref_caracteristique+" not found");
        }
    }
    public void Update_taille_ecran(Long ref_caracteristique,String taille_ecran){
        log.info("update taille_ecran");
        try {
            Produit caracteristique = GetOne(ref_caracteristique);
            caracteristique.setTaille_ecran(taille_ecran);
            Add(caracteristique);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Caracteristique with ref_caracteristique "+ref_caracteristique+" not found");
        }
    }
    public void Update_ram(Long ref_caracteristique,String ram){
        log.info("update ram");
        try {
            Produit caracteristique = GetOne(ref_caracteristique);
            caracteristique.setRam(ram);
            Add(caracteristique);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Caracteristique with ref_caracteristique "+ref_caracteristique+" not found");
        }
    }
    public void Update_sim(Long ref_caracteristique,String sim){
        log.info("update sim");
        try {
            Produit caracteristique = GetOne(ref_caracteristique);
            caracteristique.setRam(sim);
            Add(caracteristique);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Caracteristique with ref_caracteristique "+ref_caracteristique+" not found");
        }
    }
    public void Update_processeur(Long ref_caracteristique,String processeur){
        log.info("update processeur");
        try {
            Produit caracteristique = GetOne(ref_caracteristique);
            caracteristique.setProcesseur(processeur);
            Add(caracteristique);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Caracteristique with ref_caracteristique "+ref_caracteristique+" not found");
        }
    }
    public Produit getProductById(Long id) {

        return produitRepository.findById(id).get();
    }

}
