package com.example.e_commerce.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;

@Table
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Marque implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ref_marque;
    @Column(length =20)
    private String nom_marque;
    private String name;
    private String type;
    @Lob
    @Column(name = "imagedata",columnDefinition = "LONGBLOB")
    private byte[] imageData;

    @OneToMany(mappedBy = "marque", cascade = CascadeType.ALL)
    @JsonIgnore
    private Collection<Produit> produits = new ArrayList<>();
}
