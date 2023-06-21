package com.example.e_commerce.Service;


import com.example.e_commerce.Exception.UserNotFoundException;
import com.example.e_commerce.Model.Categorie;
import com.example.e_commerce.Model.Produit;
import com.example.e_commerce.Repository.Categorie_Repository;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@Slf4j
public class Categorie_service {

    @Autowired
    private Categorie_Repository categorieRepository;

    public void Add(Categorie categorie){
        log.info("ADD Categorie \n");
        categorieRepository.save(categorie);
    }

    public List<Produit> getProduitsByCategorieId(Long categorieId) {
        log.info("Get produits by categorieId: {}", categorieId);
        return categorieRepository.findProduitsByCategorieId(categorieId);
    }

    public List<Categorie> GetAll(){
        log.info("Get all Categorie");
        return  categorieRepository.findAll();
    }

    public Categorie GetOne(Long ref_categorie){
        log.info("Get one with ref_categorie "+ref_categorie);
        try {
            return categorieRepository.findById(ref_categorie).get();
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Categorie with ref_categorie "+ref_categorie+" not found");
        }
    }

    public void Update_nom_categorie(Long ref_categorie,String nom_categorie){
        log.info("update Categorie Nom ");
        try {
            Categorie categorie = GetOne(ref_categorie);
            categorie.setNom_categorie(nom_categorie);
            Add(categorie);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Categorie with ref_categorie "+ref_categorie+" not found");
        }
    }

    public void Delete(Long ref_categorie){
        log.info("Delete Categorie "+ref_categorie);
        try {
            categorieRepository.deleteById(ref_categorie);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Categorie with ref_categorie "+ref_categorie+" not found");
        }
    }
}

