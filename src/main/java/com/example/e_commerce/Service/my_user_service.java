package com.example.e_commerce.Service;

import com.example.e_commerce.Exception.UserNotFoundException;
import com.example.e_commerce.Model.my_user;
import com.example.e_commerce.Repository.my_user_Repository;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Random;

@Service
@Transactional
@Slf4j
public class my_user_service {

    @Autowired
    private my_user_Repository my_user_repository;
    @Autowired
    private JavaMailSender mailSender;
    public void Add(my_user myuser) {
        log.info("ADD Clinet \n");
        my_user_repository.save(myuser);
    }

    public List<my_user> GetAll() {
        log.info("Get all client");
        return my_user_repository.findAll();
    }

    public my_user GetOne(Long id) {
        log.info("Get one with id " + id);
        try {
            return my_user_repository.findById(id).get();
        } catch (EmptyResultDataAccessException exception) {
            throw new UserNotFoundException("Client with id " + id + " not found");
        }
    }


    public void Delete(Long id) {
        log.info("Delete client " + id);
        try {
            my_user_repository.deleteById(id);
        } catch (EmptyResultDataAccessException exception) {
            throw new UserNotFoundException("Client with id " + id + " not found");
        }
    }

    public void Update_email(Long id, String email) {
        log.info("update client email");
        try {
            my_user myuser = GetOne(id);
            myuser.setEmail(email);
            Add(myuser);
        } catch (EmptyResultDataAccessException exception) {
            throw new UserNotFoundException("Client with id " + id + " not found");
        }
    }

    public void Update_nom(Long id, String nom) {
        log.info("update client nom");
        try {
            my_user myuser = GetOne(id);
            myuser.setNom(nom);
            Add(myuser);
        } catch (EmptyResultDataAccessException exception) {
            throw new UserNotFoundException("Client with id " + id + " not found");
        }
    }

    public void Update_prenom(Long id, String prenom) {
        log.info("update client prenom");
        try {
            my_user myuser = GetOne(id);
            myuser.setPrenom(prenom);
            Add(myuser);
        } catch (EmptyResultDataAccessException exception) {
            throw new UserNotFoundException("Client with id " + id + " not found");
        }
    }

    public void Update_numtel(Long id, int numtel) {
        log.info("update client numtel");
        try {
            my_user myuser = GetOne(id);
            myuser.setNumtel(numtel);
            Add(myuser);
        } catch (EmptyResultDataAccessException exception) {
            throw new UserNotFoundException("Client with id " + id + " not found");
        }
    }

    public void Update_password(Long id, String password) {
        log.info("update client password");
        try {
            my_user myuser = GetOne(id);
            myuser.setPassword(password);
            Add(myuser);
        } catch (EmptyResultDataAccessException exception) {
            throw new UserNotFoundException("Client with id " + id + " not found");
        }
    }



    public void update_all_fileds(my_user myuser) {
        log.info("update_all_fileds");
        my_user_repository.save(myuser);
    }

    public List<my_user> GetAllRole(String Role) {
        return my_user_repository.findByRole(Role);
    }

    public my_user login(String email, String password, String role) {
        return my_user_repository.findByEmailAndPasswordAndRole(email, password , role);
    }

    public ResponseEntity<Boolean> checkEmailExists(String email) {
        try {
            getOneByEmail(email);
            return ResponseEntity.ok().body(true);
        } catch (UserNotFoundException exception) {
            return ResponseEntity.ok().body(false);
        }
    }
    public ResponseEntity<String> sendCodeByEmail(String recipientEmail) {
        String code = generateVerificationCode();

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(recipientEmail);
        message.setSubject("Code de vérification");
        message.setText("Votre code de vérification est : " + code);

        mailSender.send(message);

        return ResponseEntity.ok().body(code);
    }


    private String generateVerificationCode() {
        Random random = new Random();
        int code = random.nextInt(9000) + 1000; // Génère un nombre aléatoire entre 1000 et 9999
        return String.valueOf(code);
    }
    public my_user getOneByEmail(String email) {
        log.info("Get one user with email " + email);
        my_user user = my_user_repository.findByEmail(email);
        if (user == null) {
            throw new UserNotFoundException("User with email " + email + " not found");
        }
        return user;
    }

    public void updatePasswordByEmail(String email, String password) {
        my_user user = my_user_repository.findByEmail(email);

        if (user == null) {
            throw new UserNotFoundException("User with email " + email + " not found");
        }

        user.setPassword(password);
        my_user_repository.save(user);
    }
}

