package com.example.e_commerce.Api;


import com.example.e_commerce.Model.Marque;
import com.example.e_commerce.Model.my_user;
import com.example.e_commerce.Repository.Marque_Repository;
import com.example.e_commerce.Service.Marque_service;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/Marque/")
public class marque_api {
    @Autowired
    Marque_service marqueService;

    @GetMapping("GetAll")
    private List<Marque> GetAll(){
        return marqueService.GetAll();
    }

    @PostMapping("Add")
    private ResponseEntity<String> Add(@RequestBody Marque marque){
        marqueService.Add(marque);
        return new ResponseEntity<>("saved_Marque", HttpStatus.CREATED);
    }

    @GetMapping("GetOne/{ref_marque}")
    private Marque Getone(@PathVariable("ref_marque") Long ref_marque){
        return marqueService.GetOne(ref_marque);
    }

    @DeleteMapping("Delete/{ref_marque}")
    private ResponseEntity<String> Delete(@PathVariable("ref_marque") Long ref_marque){
        marqueService.Delete(ref_marque);
        return new ResponseEntity<>("deleted_marque", HttpStatus.OK);
    }

    @PutMapping("update_nom_marque/{ref_marque}")
    private ResponseEntity<String> update(@PathVariable("ref_marque") Long ref_marque ,@RequestParam("nom_marque") String nom_marque ){
        marqueService.Update_nom_marque(ref_marque, nom_marque);
        return new ResponseEntity<>("updted_marque", HttpStatus.OK);
    }


    @PostMapping("addimage")
    public ResponseEntity<?> uploadImage(@RequestParam("image") MultipartFile file, @RequestParam("nom_marque") String nom_marque) throws IOException {
        String uploadImage = marqueService.uploadImage(file,nom_marque);
        return ResponseEntity.status(HttpStatus.OK)
                .body(uploadImage);
    }

    @GetMapping("{ref_marque}")
    public ResponseEntity<?> downloadImage(@PathVariable Long ref_marque){
        byte[] imageData=marqueService.downloadImage(ref_marque);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(imageData);

    }

    @PutMapping("update_all")
    private ResponseEntity<String> update_all(@RequestBody Marque marque){
        marqueService.update_all_fileds(marque);
        return new ResponseEntity<>("updated_Marque", HttpStatus.OK);
    }
}

