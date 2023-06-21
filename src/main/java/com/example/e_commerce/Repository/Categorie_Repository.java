package com.example.e_commerce.Repository;


import com.example.e_commerce.Model.Categorie;
import com.example.e_commerce.Model.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface Categorie_Repository extends JpaRepository<Categorie,Long> {
    @Query("SELECT p FROM Produit p WHERE p.categorie.id = :categorieId")
    List<Produit> findProduitsByCategorieId(Long categorieId);
}

