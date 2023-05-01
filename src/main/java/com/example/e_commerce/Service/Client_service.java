package com.example.e_commerce.Service;

import com.example.e_commerce.Exception.UserNotFoundException;
import com.example.e_commerce.Model.Client;
import com.example.e_commerce.Repository.Client_Repository;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@Transactional
@Slf4j
public class Client_service {

    @Autowired
    private Client_Repository clientRepository;

    public void Add(Client client){
        log.info("ADD Clinet \n");
        clientRepository.save(client);
    }

    public List<Client> GetAll(){
        log.info("Get all client");
        return  clientRepository.findAll();
    }

    public Client GetOne(Long id){
        log.info("Get one with id "+id);
        try {
            return clientRepository.findById(id).get();
        }catch (EmptyResultDataAccessException exception){
        throw new UserNotFoundException("Client with id "+id+" not found");
    }
    }



    public void Delete(Long id){
        log.info("Delete client "+id);
        try {
            clientRepository.deleteById(id);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Client with id "+id+" not found");
        }
    }
    public void Update_email(Long id,String email){
        log.info("update client email");
        try {
            Client client = GetOne(id);
            client.setEmail(email);
            Add(client);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Client with id "+id+" not found");
        }
    }
    public void Update_nom(Long id,String nom){
        log.info("update client nom");
        try {
            Client client = GetOne(id);
            client.setNom(nom);
            Add(client);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Client with id "+id+" not found");
        }
    }
    public void Update_prenom(Long id,String prenom){
        log.info("update client prenom");
        try {
            Client client = GetOne(id);
            client.setPrenom(prenom);
            Add(client);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Client with id "+id+" not found");
        }
    }
    public void Update_numtel(Long id,int numtel){
        log.info("update client numtel");
        try {
            Client client = GetOne(id);
            client.setNumtel(numtel);
            Add(client);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Client with id "+id+" not found");
        }
    }
    public void Update_password(Long id,String password){
        log.info("update client password");
        try {
            Client client = GetOne(id);
            client.setPassword(password);
            Add(client);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Client with id "+id+" not found");
        }
    }
    public void Update_dateNaiss(Long id, Date dateNaiss) {
        log.info("update client dateNaiss");
        try {
            Client client = GetOne(id);
            client.setDateNaiss(dateNaiss);
            Add(client);
        } catch (EmptyResultDataAccessException exception) {
            throw new UserNotFoundException("Client with id " + id + " not found");
        }
    }

    public void update_all_fileds(Client client){
        log.info("update_all_fileds");
        clientRepository.save(client);
    }
}

