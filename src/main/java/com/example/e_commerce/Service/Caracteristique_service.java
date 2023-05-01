package com.example.e_commerce.Service;


import com.example.e_commerce.Exception.UserNotFoundException;
import com.example.e_commerce.Model.Caracteristique;
import com.example.e_commerce.Repository.Caracteristique_Repository;

import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@Slf4j
public class Caracteristique_service {

    @Autowired
    private Caracteristique_Repository caracteristiqueRepository;

    public void Add(Caracteristique caracteristique){
        log.info("ADD Caracteristique \n");
        caracteristiqueRepository.save(caracteristique);
    }

    public List<Caracteristique> GetAll(){
        log.info("Get all Caracteristique");
        return  caracteristiqueRepository.findAll();
    }

    public Caracteristique GetOne(Long ref_caracteristique){
        log.info("Get one with ref_caracteristique "+ref_caracteristique);
        try {
            return caracteristiqueRepository.findById(ref_caracteristique).get();
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Caracteristique with ref_Caracteristique "+ref_caracteristique+" not found");
        }
    }



    public void Delete(Long ref_caracteristique){
        log.info("Delete Caracteristique "+ref_caracteristique);
        try {
            caracteristiqueRepository.deleteById(ref_caracteristique);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Caracteristique with ref_caracteristique "+ref_caracteristique+" not found");
        }
    }

    public void Update_stockage(Long ref_caracteristique,String stockage){
        log.info("update Stockage");
        try {
            Caracteristique caracteristique = GetOne(ref_caracteristique);
            caracteristique.setStockage(stockage);
            Add(caracteristique);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Caracteristique with ref_caracteristique "+ref_caracteristique+" not found");
        }
    }
    public void Update_garantie(Long ref_caracteristique,String garantie){
        log.info("update garantie");
        try {
            Caracteristique caracteristique = GetOne(ref_caracteristique);
            caracteristique.setGarantie(garantie);
            Add(caracteristique);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Caracteristique with ref_caracteristique "+ref_caracteristique+" not found");
        }
    }
    public void Update_couleur(Long ref_caracteristique,String couleur){
        log.info("update couleur");
        try {
            Caracteristique caracteristique = GetOne(ref_caracteristique);
            caracteristique.setCouleur(couleur);
            Add(caracteristique);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Caracteristique with ref_caracteristique "+ref_caracteristique+" not found");
        }
    }
    public void Update_taille_ecran(Long ref_caracteristique,String taille_ecran){
        log.info("update taille_ecran");
        try {
            Caracteristique caracteristique = GetOne(ref_caracteristique);
            caracteristique.setTaille_ecran(taille_ecran);
            Add(caracteristique);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Caracteristique with ref_caracteristique "+ref_caracteristique+" not found");
        }
    }
    public void Update_ram(Long ref_caracteristique,String ram){
        log.info("update ram");
        try {
            Caracteristique caracteristique = GetOne(ref_caracteristique);
            caracteristique.setRam(ram);
            Add(caracteristique);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Caracteristique with ref_caracteristique "+ref_caracteristique+" not found");
        }
    }
    public void Update_sim(Long ref_caracteristique,String sim){
        log.info("update sim");
        try {
            Caracteristique caracteristique = GetOne(ref_caracteristique);
            caracteristique.setRam(sim);
            Add(caracteristique);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Caracteristique with ref_caracteristique "+ref_caracteristique+" not found");
        }
    }
    public void Update_processeur(Long ref_caracteristique,String processeur){
        log.info("update processeur");
        try {
            Caracteristique caracteristique = GetOne(ref_caracteristique);
            caracteristique.setProcesseur(processeur);
            Add(caracteristique);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Caracteristique with ref_caracteristique "+ref_caracteristique+" not found");
        }
    }

}

