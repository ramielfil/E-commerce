package com.example.e_commerce.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.*;

@Table
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class my_user implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length =20)
    private String nom;
    @Column(length =20)
    private String prenom;
    @Column(length =20)
    private String password;

    @Column(length =30)
    private String email;
    @Column(length =10)
    private int numtel;
    @Column(length = 20)
    private String role;


    @OneToMany(mappedBy = "my_user", cascade = CascadeType.ALL)
    @JsonIgnore
    private Collection<Commande> commandes = new ArrayList<>();

}
