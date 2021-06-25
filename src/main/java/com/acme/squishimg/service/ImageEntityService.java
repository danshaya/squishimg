package com.acme.squishimg.service;

import com.acme.squishimg.exception.ImageEntityNotFoundException;
import com.acme.squishimg.model.ImageEntity;
import com.acme.squishimg.repository.ImageEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class ImageEntityService {

    private final ImageEntityRepository imageEntityRepo;

    @Autowired
    public ImageEntityService(ImageEntityRepository imageEntityRepo) {
        this.imageEntityRepo = imageEntityRepo;
    }

    public ImageEntity addImageEntity(ImageEntity imageEntity) {
        imageEntity.setCreatedAt(LocalDateTime.now());

        return imageEntityRepo.save(imageEntity);
    }

    public ImageEntity findImageEntityByFinalName(String finalName) {
        return imageEntityRepo.findImageEntityByFinalName(finalName)
                .orElseThrow(() -> new ImageEntityNotFoundException("'" + finalName + "' was not found"));
    }
}
