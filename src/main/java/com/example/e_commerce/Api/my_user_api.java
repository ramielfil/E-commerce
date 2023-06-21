package com.example.e_commerce.Api;

import com.example.e_commerce.Model.my_user;
import com.example.e_commerce.Service.my_user_service;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;


@Slf4j
@RestController
@RequestMapping("/api/my_user/")
public class my_user_api {
    @Autowired
    my_user_service my_user_service;
    @Autowired
    private JavaMailSender mailSender;

    @GetMapping("GetAll")
    private List<my_user> GetAll(){
        return my_user_service.GetAll();
    }

    @PostMapping("Add")
    private ResponseEntity<String> Add(@RequestBody my_user myuser){
        my_user_service.Add(myuser);

        // Envoyer l'e-mail à l'utilisateur
        sendRegistrationEmail(myuser.getEmail());
        return new ResponseEntity<>("saved_"+myuser.getRole(), HttpStatus.CREATED);
    }

    public void sendRegistrationEmail(String recipientEmail) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(recipientEmail);
        message.setSubject("Bienvenue dans notre site e-commerce !");
        message.setText("Bonjour,\n\nVotre inscription a été réussie. Merci de rejoindre notre site e-commerce.");

        mailSender.send(message);
    }

    @GetMapping("GetOne/{id}")
    private my_user Getone(@PathVariable("id") Long id){
        return my_user_service.GetOne(id);
    }

    @DeleteMapping("Delete/{id}")
    private ResponseEntity<String> Delete(@PathVariable("id") Long id){
        my_user_service.Delete(id);
        return new ResponseEntity<>( HttpStatus.OK);
    }

    @PutMapping("update_email/{id}")
    private ResponseEntity<String> updateemail(@PathVariable("id") Long id ,@RequestParam("email") String email ){
        my_user_service.Update_email(id, email);
        return new ResponseEntity<>( HttpStatus.OK);
    }
    @PutMapping("update_nom/{id}")
    private ResponseEntity<String> updatenom(@PathVariable("id") Long id ,@RequestParam("nom") String nom ){
        my_user_service.Update_nom(id, nom);
        return new ResponseEntity<>("updted_Id", HttpStatus.OK);
    }
    @PutMapping("update_prenom/{id}")
    private ResponseEntity<String> updateprenom(@PathVariable("id") Long id ,@RequestParam("prenom") String prenom ){
        my_user_service.Update_prenom(id, prenom);
        return new ResponseEntity<>("updted_Prenom", HttpStatus.OK);
    }    @PutMapping("update_password/{id}")
    private ResponseEntity<String> updatepassword(@PathVariable("id") Long id ,@RequestParam("password") String password ){
        my_user_service.Update_password(id, password);
        return new ResponseEntity<>("updted_Password", HttpStatus.OK);
    }    @PutMapping("numtel/{id}")
    private ResponseEntity<String> updatenumtel(@PathVariable("id") Long id ,@RequestParam("numtel") int numtel ){
        my_user_service.Update_numtel(id, numtel);
        return new ResponseEntity<>("updted_Numtel", HttpStatus.OK);
    }


    @PutMapping("update_all")
    private ResponseEntity<String> update_all(@RequestBody my_user myuser){
        my_user_service.update_all_fileds(myuser);
        return new ResponseEntity<>( HttpStatus.OK);

    }
    @GetMapping("allbyrole/{role}")
    private List<my_user> GetAll(@PathVariable("role") String role){
        return my_user_service.GetAllRole(role);
    }

    @PostMapping("/login")
    public ResponseEntity<my_user> login(@RequestBody my_user myUser) {
        my_user loggedInUser = my_user_service.login(myUser.getEmail(), myUser.getPassword(),myUser.getRole());

        if (loggedInUser != null) {
            return new ResponseEntity<>(loggedInUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("/check-email")
    public ResponseEntity<String> checkEmail(@RequestParam("email") String email) {
        ResponseEntity<Boolean> emailExistsResponse = my_user_service.checkEmailExists(email);
        Boolean emailExists = emailExistsResponse.getBody();

        if (emailExists != null && emailExists) {
            ResponseEntity<String> response = my_user_service.sendCodeByEmail(email);
            if (response.getStatusCode() == HttpStatus.OK) {
                String code = response.getBody(); // Récupérer le code généré
                return ResponseEntity.ok().body(code);
            } else {
                // Gérer le cas où l'envoi du code a échoué
                // Peut-être renvoyer une autre réponse ou effectuer une autre action
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send code");
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("update_passwordE/{email}")
    public ResponseEntity<String> updatePasswordByEmail(@PathVariable("email") String email, @RequestParam("password") String password) {
        my_user_service.updatePasswordByEmail(email, password);
        return new ResponseEntity<>("updated_user", HttpStatus.OK);
    }
}
