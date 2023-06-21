package com.example.e_commerce.Repository;



import com.example.e_commerce.Model.Marque;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface Marque_Repository extends JpaRepository<Marque,Long> {
    Optional<Marque> findByName(String fileName);

}

