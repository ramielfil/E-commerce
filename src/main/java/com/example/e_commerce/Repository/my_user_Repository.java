package com.example.e_commerce.Repository;

import com.example.e_commerce.Model.my_user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface my_user_Repository extends JpaRepository<my_user,Long> {
    @Autowired
    List<my_user> findByRole(String Role);

    my_user findByEmailAndPasswordAndRole(String email, String password, String role);


    my_user findByEmail(String email);
}