package com.example.e_commerce.Api;

import com.example.e_commerce.Model.Client;
import com.example.e_commerce.Repository.Client_Repository;
import com.example.e_commerce.Service.Client_service;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/client/")
public class client_api {
    @Autowired
    Client_service clientService;

    @GetMapping("GetAll")
    private List<Client> GetAll(){
        return clientService.GetAll();
    }

    @PostMapping("Add")
    private ResponseEntity<String> Add(@RequestBody Client client){
        clientService.Add(client);
        return new ResponseEntity<>("saved_client", HttpStatus.CREATED);
    }

    @GetMapping("GetOne/{id}")
    private Client Getone(@PathVariable("id") Long id){
        return clientService.GetOne(id);
    }

    @DeleteMapping("Delete/{id}")
    private ResponseEntity<String> Delete(@PathVariable("id") Long id){
            clientService.Delete(id);
        return new ResponseEntity<>("deleted_client", HttpStatus.OK);
    }

    @PutMapping("update_email/{id}")
    private ResponseEntity<String> updateemail(@PathVariable("id") Long id ,@RequestParam("email") String email ){
        clientService.Update_email(id, email);
        return new ResponseEntity<>("updted_client", HttpStatus.OK);
    }
    @PutMapping("update_nom/{id}")
    private ResponseEntity<String> updatenom(@PathVariable("id") Long id ,@RequestParam("nom") String nom ){
        clientService.Update_nom(id, nom);
        return new ResponseEntity<>("updted_client", HttpStatus.OK);
    }
    @PutMapping("update_prenom/{id}")
    private ResponseEntity<String> updateprenom(@PathVariable("id") Long id ,@RequestParam("prenom") String prenom ){
        clientService.Update_prenom(id, prenom);
        return new ResponseEntity<>("updted_client", HttpStatus.OK);
    }    @PutMapping("update_password/{id}")
    private ResponseEntity<String> updatepassword(@PathVariable("id") Long id ,@RequestParam("password") String password ){
        clientService.Update_password(id, password);
        return new ResponseEntity<>("updted_client", HttpStatus.OK);
    }    @PutMapping("numtel/{id}")
    private ResponseEntity<String> updatenumtel(@PathVariable("id") Long id ,@RequestParam("numtel") int numtel ){
        clientService.Update_numtel(id, numtel);
        return new ResponseEntity<>("updted_client", HttpStatus.OK);
    }    @PutMapping("update_dateNaiss/{id}")
    private ResponseEntity<String> updatedateNaiss(@PathVariable("id") Long id ,@RequestParam("dateNaiss") Date dateNaiss ){
        clientService.Update_dateNaiss(id, dateNaiss);
        return new ResponseEntity<>("updted_client", HttpStatus.OK);
    }


    @PutMapping("update_all")
    private ResponseEntity<String> update_all(@RequestBody Client client ){
        clientService.update_all_fileds(client);
        return new ResponseEntity<>("updated_client", HttpStatus.OK);
    }

}
