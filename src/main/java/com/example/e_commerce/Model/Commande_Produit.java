package com.example.e_commerce.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.awt.*;
import java.io.Serializable;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "Commande_Produit")
public class Commande_Produit implements Serializable{

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @ManyToOne
        @JoinColumn(name = "ref_commande")
        private Commande commande;

        @ManyToOne
        @JoinColumn(name = "ref_produit")
        private Produit produit;

        @Column(columnDefinition = "int default 0")
        private int quantite;

        // Constructeurs, getters, setters, etc.
    }
