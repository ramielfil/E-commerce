package com.example.e_commerce.Service;



import com.example.e_commerce.Exception.UserNotFoundException;
import com.example.e_commerce.Model.Marque;
import com.example.e_commerce.Repository.Marque_Repository;
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
public class Marque_service {

    @Autowired
    private Marque_Repository marqueRepository;

    public void Add(Marque marque){
        log.info("ADD Marque \n");
        marqueRepository.save(marque);
    }

    public List<Marque> GetAll(){
        log.info("Get all Marque");
        return  marqueRepository.findAll();
    }

    public Marque GetOne(Long ref_marque){
        log.info("Get one with ref_Marque "+ref_marque);
        try {
            return marqueRepository.findById(ref_marque).get();
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Marque with ref_Marque "+ref_marque+" not found");
        }
    }

    public void Update_nom_marque(Long ref_marque,String nom_marque){
        log.info("update Nom du Marque ");
        try {
            Marque marque = GetOne(ref_marque);
            marque.setNom_marque(nom_marque);
            Add(marque);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Marque with ref_Marque "+ref_marque+" not found");
        }
    }

    public void Delete(Long ref_marque){
        log.info("Delete Marque "+ref_marque);
        try {
            marqueRepository.deleteById(ref_marque);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Marque with ref_Marque "+ref_marque+" not found");
        }
    }
}


