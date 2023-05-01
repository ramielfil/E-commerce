package com.example.e_commerce.Service;

import com.example.e_commerce.Exception.UserNotFoundException;
import com.example.e_commerce.Model.Produit;
import com.example.e_commerce.Repository.Produit_Repository;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@Slf4j
public class Produit_service {

    @Autowired
    private Produit_Repository produitRepository;

    public void Add(Produit produit){
        log.info("ADD produit \n");
        produitRepository.save(produit);
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



    public void Delete(Long ref_produit){
        log.info("Delete produit "+ref_produit);
        try {
            produitRepository.deleteById(ref_produit);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("produit with ref_produit "+ref_produit+" not found");
        }
    }
    public void Update_quantite(Long ref_produit,int quantite){
        log.info("update produit quantité");
        try {
            Produit produit = GetOne(ref_produit);
            produit.setQuantite_produit(quantite);
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
    }    public void Update_prix(Long ref_produit,float prix){
        log.info("update produit prix");
        try {
            Produit produit = GetOne(ref_produit);
            produit.setPrix_produit(prix);
            Add(produit);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("produit with ref "+ref_produit+" not found");
        }
    }    public void Update_statut(Long ref_produit,int statut){
        log.info("update produit statut");
        try {
            Produit produit = GetOne(ref_produit);
            produit.setStatut_produit(statut);
            Add(produit);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("produit with ref "+ref_produit+" not found");
        }
    }



}
