package com.acme.squishimg.controller;

import com.acme.squishimg.exception.ImageEntityNotFoundException;
import com.acme.squishimg.model.ImageEntity;
import com.acme.squishimg.service.FileUploadUtil;
import com.acme.squishimg.service.ImageEntityService;
import org.apache.commons.io.IOUtils;
import org.springframework.http.*;
import org.springframework.util.InvalidMimeTypeException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.util.StringUtils;
import org.apache.commons.io.FilenameUtils;

import javax.servlet.ServletContext;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Objects;
import java.util.UUID;

@RestController
@RequestMapping("/image")
public class ImageEntityController {

    private final ImageEntityService imageEntityService;
    private final FileUploadUtil fileUploadUtil;

    public ImageEntityController(ImageEntityService imageEntityService, FileUploadUtil fileUploadUtil, ServletContext servletContext) {
        this.imageEntityService = imageEntityService;
        this.fileUploadUtil = fileUploadUtil;
    }

    @GetMapping(value = "/{finalName}")
    public @ResponseBody Object fetchImageEntity(@PathVariable("finalName") String finalName) {
        try
        {
            ImageEntity image = imageEntityService.findImageEntityByFinalName(finalName);
            String filePath = FileUploadUtil.UPLOAD_PATH + "/cmp-" + image.getFinalName();

            Path destination = Paths.get(filePath);

            byte[] media = IOUtils.toByteArray(destination.toUri());
            HttpHeaders headers = new HttpHeaders();
            headers.setCacheControl(CacheControl.noCache().getHeaderValue());

            String fileExt = FilenameUtils.getExtension(image.getFinalName());
            switch(fileExt.toLowerCase())
            {
                case "png":
                    headers.setContentType(MediaType.IMAGE_PNG);
                    break;
                case "jpg":
                case "jpeg":
                    headers.setContentType(MediaType.IMAGE_JPEG);
                    break;
                case "gif":
                    headers.setContentType(MediaType.IMAGE_GIF);
                    break;
                default:
                    throw new InvalidMimeTypeException(fileExt, "unsupported image format");
            }

            return new ResponseEntity<>(media, headers, HttpStatus.OK);
        }
        catch (ImageEntityNotFoundException | IOException ex)
        {
            return new ResponseEntity<byte[]>(HttpStatus.NOT_FOUND);
        }
        catch(InvalidMimeTypeException ex)
        {
            return new ResponseEntity<ImageEntity>(HttpStatus.UNSUPPORTED_MEDIA_TYPE);
        }
    }

    @PostMapping("/upload")
    public ResponseEntity<ImageEntity>uploadAndCompressImage(
            @RequestParam("image") MultipartFile multipartFile) {
        try
        {
            String originalFilename = StringUtils
                    .cleanPath(Objects.requireNonNull(multipartFile.getOriginalFilename()));
            String fileExt = FilenameUtils.getExtension(multipartFile.getOriginalFilename());

            if(!Arrays.asList(new String[] {"png", "jpg", "jpeg", "gif"}).contains(fileExt))
                throw new InvalidMimeTypeException(fileExt, "unsupported image format");

            String fileName = UUID.randomUUID().toString() + "." + fileExt;
            this.fileUploadUtil.saveFile(fileName, multipartFile);

            ImageEntity image = new ImageEntity();
            image.setOriginalName(originalFilename);
            image.setFinalName(fileName);
            return new ResponseEntity<ImageEntity>(imageEntityService.addImageEntity(image), HttpStatus.CREATED);
        }
        catch(InvalidMimeTypeException ex)
        {
            return new ResponseEntity<ImageEntity>(HttpStatus.UNSUPPORTED_MEDIA_TYPE);
        }
        catch(IOException ex)
        {
            return new ResponseEntity<ImageEntity>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
