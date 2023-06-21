package com.example.e_commerce.Repository;


import com.example.e_commerce.Model.Commande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface Commande_Repository extends JpaRepository<Commande,Long> {
    @Query("SELECT ref_commande FROM Commande c ORDER BY c.ref_commande DESC limit 1")
    Long findLastInserted();
}

