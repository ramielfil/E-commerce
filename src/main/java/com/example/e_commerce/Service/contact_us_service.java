package com.example.e_commerce.Service;

import com.example.e_commerce.Model.contact_us;
import com.example.e_commerce.Repository.Contact_us_Repository;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@Slf4j
public class contact_us_service {
    @Autowired
    private Contact_us_Repository Contact_us_Repository;
    public void Add(contact_us contact_us) {
        log.info("ADD Requéte \n");
        Contact_us_Repository.save(contact_us);
    }

    public List<contact_us> GetAll(){
        log.info("Get all commande");
        return  Contact_us_Repository.findAll();
    }
}
