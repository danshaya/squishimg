package com.acme.squishimg.repository;

import com.acme.squishimg.model.ImageEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ImageEntityRepository extends JpaRepository<ImageEntity, Long> {

    Optional<ImageEntity> findImageEntityByFinalName(String finalName);
}
