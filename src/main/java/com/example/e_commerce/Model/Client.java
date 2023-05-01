package com.example.e_commerce.Model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Table
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length =20)
    private String nom;
    @Column(length =20)

    private String prenom;
    @Column(length =20)

    private String password;
    @Column
    private Date dateNaiss;
    @Column(length =30)
    private String email;
    @Column(length =10)
    private int numtel;
}
