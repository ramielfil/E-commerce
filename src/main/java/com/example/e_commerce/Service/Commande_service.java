package com.example.e_commerce.Service;


import com.example.e_commerce.Exception.UserNotFoundException;
import com.example.e_commerce.Model.Commande;
import com.example.e_commerce.Repository.Commande_Repository;
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

    public void Add(Commande commande){
        log.info("ADD commande \n");
        commandeRepository.save(commande);
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
    public void Update_adresse(Long ref_commande,String adresse){
        log.info("update commande adresse");
        try {
            Commande commande = GetOne(ref_commande);
            commande.setAdresse(adresse);
            Add(commande);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Commande with ref_commande "+ref_commande+" not found");
        }
    }
    public void Update_statut(Long ref_commande,String statut){
        log.info("update commande statut");
        try {
            Commande commande = GetOne(ref_commande);
            commande.setStatut_commande(statut);
            Add(commande);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Commande with ref_commande "+ref_commande+" not found");
        }
    }

}

