package com.example.e_commerce.Repository;

import com.example.e_commerce.Model.Commande;
import com.example.e_commerce.Model.Commande_Produit;
import com.example.e_commerce.Model.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.lang.annotation.Native;

public interface Commande_Produit_Repository extends JpaRepository<Commande_Produit, Long> {

    @Query(value = "SELECT * FROM commande_produit cp WHERE cp.ref_commande = :refc AND cp.ref_produit = :refp", nativeQuery = true)
    Commande_Produit findcp(@Param("refc") Long ref_commande, @Param("refp") Long ref_produit);
    @Modifying
    @Query("UPDATE Commande_Produit cp SET cp.quantite = :newQuantity WHERE cp.commande.ref_commande = :refCommande AND cp.produit.ref_produit = :refProduit")
    void updateQuantity(@Param("refCommande") Long refCommande, @Param("refProduit") Long refProduit, @Param("newQuantity") int newQuantity);
}
