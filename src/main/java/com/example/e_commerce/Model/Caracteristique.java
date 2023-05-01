package com.example.e_commerce.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.io.Serializable;

@Table
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Caracteristique implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_car;
    @Column(length =15)
    private String stockage;
    @Column(length =15)
    private String garantie;
    @Column(length =15)
    private String couleur;
    @Column(length =20)
    private String taille_ecran;
    @Column(length =20)
    private String ram;
    @Column(length =20)
    private String sim;
    @Column(length =20)
    private String processeur;





}
