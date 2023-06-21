package com.example.e_commerce.Service;



import com.example.e_commerce.Exception.UserNotFoundException;
import com.example.e_commerce.Model.Marque;
import com.example.e_commerce.Model.my_user;
import com.example.e_commerce.Repository.Marque_Repository;
import com.example.e_commerce.Util.ImageUtils;
import jakarta.transaction.Transactional;
import lombok.Builder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@Slf4j
@Builder

public class Marque_service {

    @Autowired
    private Marque_Repository marqueRepository;

    public void Add(Marque marque){
        log.info("ADD marque \n");
        marqueRepository.save(marque);
    }

    public List<Marque> GetAll(){
        log.info("Get all Marque");
        return  marqueRepository.findAll();
    }

    public Marque GetOne(Long ref_marque){
        log.info("Get one with ref_Marque "+ref_marque);
        try {
            return marqueRepository.findById(ref_marque).get();
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Marque with ref_Marque "+ref_marque+" not found");
        }
    }

    public void Update_nom_marque(Long ref_marque,String nom_marque){
        log.info("update Nom du Marque ");
        try {
            Marque marque = GetOne(ref_marque);
            marque.setNom_marque(nom_marque);
            Add(marque);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Marque with ref_Marque "+ref_marque+" not found");
        }
    }

    public void Delete(Long ref_marque){
        log.info("Delete Marque "+ref_marque);
        try {
            marqueRepository.deleteById(ref_marque);
        }catch (EmptyResultDataAccessException exception){
            throw new UserNotFoundException("Marque with ref_Marque "+ref_marque+" not found");
        }
    }

    public String uploadImage(MultipartFile file,String nom_marque) throws IOException {

        Marque imageData = marqueRepository.save(Marque.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                        .nom_marque(nom_marque)
                .imageData(ImageUtils.compressImage(file.getBytes())).build());
        if (imageData != null) {
            return "file uploaded successfully : " + file.getOriginalFilename();
        }
        return null;
    }

    public byte[] downloadImage(Long ref_marque){
        Optional<Marque> dbImageData = marqueRepository.findById(ref_marque);
        byte[] images= ImageUtils.decompressImage(dbImageData.get().getImageData());
        return images;
    }
    public void update_all_fileds(Marque marque){
        log.info("update_all_fileds");
        marqueRepository.save(marque);
    }
}


