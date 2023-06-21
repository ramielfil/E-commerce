package com.example.e_commerce.Api;
import com.example.e_commerce.Model.Commande;
import com.example.e_commerce.Model.contact_us;
import com.example.e_commerce.Service.contact_us_service;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/contactus/")
public class contact_us_api {
    @Autowired
    contact_us_service contact_us_service;
    @GetMapping("GetAll")
    private List<contact_us> GetAll(){
        return contact_us_service.GetAll();
    }
    @PostMapping("Add")
    private ResponseEntity<String> Add(@RequestBody contact_us contact_us){
        contact_us_service.Add(contact_us);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
