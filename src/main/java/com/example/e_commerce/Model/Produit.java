package com.example.e_commerce.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.*;

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
@Builder

public class Produit implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ref_produit;
    @Column
    @Lob

    private String nom_produit;
    @Column
    @Lob
    private String desc_produit;
    @Column(length =20)
    @Lob
    private String prix_produit;
    @Column (length =20)
    @Lob
    private String quantitue_produit;
    @Lob
    private String name1;
    @Lob
    private String type1;
    @Lob
    @Column(name = "imagedata1",columnDefinition = "LONGBLOB")
    private byte[] imageData1;





    @ManyToMany(mappedBy = "produits", cascade = { CascadeType.ALL }, fetch = FetchType.EAGER)
    @JsonBackReference
    private List<Commande> commandes = new ArrayList<>();



    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="ref_marque", nullable=false)
    private Marque marque;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="ref_categorie", nullable=false)
    private Categorie categorie;
    @Column
    private String stockage;
    @Column
    private String garantie;
    @Column
    private String couleur;
    @Column
    private String taille_ecran;
    @Column
    private String ram;
    @Column
    private String sim;
    @Column
    private String processeur;
    @Column
    private String  qualite_camera;
    @Column
    private String  graphique;
    // qunatite
    @Column(columnDefinition = "int default 0")
    private int quantite;
}
