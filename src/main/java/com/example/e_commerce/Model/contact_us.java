package com.example.e_commerce.Model;


import jakarta.persistence.*;
import lombok.*;

@Table
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class contact_us {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nom" )
    private String nom;

    @Column(name = "email" )
    private String email;

    @Column(name = "titre" )
    private String titre;

    @Column(name = "message")
    @Lob
    private String message;

}

