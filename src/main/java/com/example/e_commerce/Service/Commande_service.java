package com.example.e_commerce.Service;


import com.example.e_commerce.Exception.UserNotFoundException;
import com.example.e_commerce.Model.Commande;
import com.example.e_commerce.Model.Commande_Produit;
import com.example.e_commerce.Model.Produit;
import com.example.e_commerce.Repository.Categorie_Repository;
import com.example.e_commerce.Repository.Commande_Produit_Repository;
import com.example.e_commerce.Repository.Commande_Repository;
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
public class Commande_service {

    @Autowired
    private Commande_Repository commandeRepository;
    @Autowired
    private Commande_Produit_Repository  commandeProduitRepository;
    @Autowired
    private Categorie_Repository Categorie_Repository;
    @Autowired
    private Produit_Repository produitRepository;

    public void Add(Commande commande){
        log.info("ADD commande \n");
        //log.info(commande.getClient().getId().toString());
        commandeRepository.save(commande);
       Long ref_commande = Long.valueOf(commandeRepository.findLastInserted().toString());
       log.info("ref comande "+ref_commande);
        List<Produit> produits = commande.getProduits().stream().toList();
        int index = 0;
        for (Produit produit : produits) {
            int new_qte = Integer.parseInt(produit.getQuantitue_produit());
            new_qte -= produit.getQuantite();
            produit.setQuantitue_produit(String.valueOf(new_qte));
            produitRepository.save(produit);
            System.out.println(produit.getRef_produit());
            update_qte(ref_commande,produit.getRef_produit(),commande.getProduits().get(index).getQuantite());
            index ++;
        }




    }

    public void update_qte(Long ref_commande , Long ref_pro, int q)
    {   log.info("q == "+q);
        Commande_Produit cp = commandeProduitRepository.findcp(ref_commande,ref_pro);
        cp.setQuantite(q);
        commandeProduitRepository.save(cp);
    }

    public List<Commande> GetAll(){
        log.info("Get all commande");
        return  commandeRepository.findAll();
    }

    public Commande GetOne(Long ref_commande){
        log.info("Get one with ref_commande "+ref_commande);
        try {
            return commandeRepository.findById(ref_commande).get();
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("commande with ref_commande "+ref_commande+" not found");
        }
    }


    public void Delete(Long ref_commande){
        log.info("Delete commande "+ref_commande);
        try {
            commandeRepository.deleteById(ref_commande);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Commande with ref_commande "+ref_commande+" not found");
        }
    }
    public void Update_etat(Long ref_commande,String etat){
        log.info("update commande etat");
        try {
            Commande commande = GetOne(ref_commande);
            commande.setEtat(etat);
            Add(commande);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Commande with ref_commande "+ref_commande+" not found");
        }
    }
    public void Update_statut(Long ref_commande,String statut_commande){
        log.info("update commande statut");
        try {
            Commande commande = GetOne(ref_commande);
            commande.setStatut_commande(statut_commande);
            Add(commande);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Commande with ref_commande "+ref_commande+" not found");
        }
    }

}

