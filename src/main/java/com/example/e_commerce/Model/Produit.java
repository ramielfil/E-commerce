package com.example.e_commerce.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
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
public class Produit implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ref_produit;
    @Column(length =20)
    private String nom_produit;
    @Column(length =555)
    private String desc_produit;
    @Column(length =20)
    private float prix_produit;
    @Column(length =1)
    private int statut_produit;
    @Column(length =20)
    private int quantite_produit;

    @ManyToMany(mappedBy = "produits", cascade = { CascadeType.ALL })
    private Set<Commande> commande = new HashSet<Commande>();

}
