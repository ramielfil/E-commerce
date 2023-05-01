package com.example.e_commerce.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Table
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Commande implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ref_commande;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @Column(name = "date_commande")
    private LocalDate date_commande = LocalDate.now();
    @Column(length =100)
    private String adresse;
    @Column(length =20)
    private String ville;
    @Column(columnDefinition = "varchar(20) default 'en attente'")
    private String statut_commande;
    @Column(length =20)
    private float montant;


    //relation entre les tables
    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "Commande_Produit",
            joinColumns = { @JoinColumn(name = "ref_commande") },
            inverseJoinColumns = { @JoinColumn(name = "ref_produit") }

    )
    Set< Produit > produits = new HashSet< Produit >();


}
