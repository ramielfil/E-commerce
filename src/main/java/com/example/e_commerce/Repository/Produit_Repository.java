package com.example.e_commerce.Repository;

import com.example.e_commerce.Model.Marque;
import com.example.e_commerce.Model.Produit;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface Produit_Repository extends JpaRepository<Produit,Long> {
    Optional<Produit> findByName1(String fileName);
    List<Produit> findByMarqueIn(List<Marque> marques);
    Optional<Produit> findById(Long id);


}
