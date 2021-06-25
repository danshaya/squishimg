package com.acme.squishimg.service;

import org.apache.commons.io.FilenameUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.*;
import javax.imageio.stream.ImageInputStream;
import javax.imageio.stream.ImageOutputStream;
import java.awt.image.BufferedImage;
import java.io.*;
import java.nio.file.*;

import java.io.IOException;
import java.util.Iterator;

@Service
public class FileUploadUtil {

    public static final String UPLOAD_PATH = "uploaded";

    public void saveFile(String fileName, MultipartFile multipartFile) throws IOException  {
        Path uploadPath = Paths.get(FileUploadUtil.UPLOAD_PATH);
        System.out.println(uploadPath);

        if (!Files.exists(uploadPath))
            Files.createDirectories(uploadPath);

        try (InputStream inputStream = multipartFile.getInputStream())
        {
            Path filePath = uploadPath.resolve(fileName);
            Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);

            // handle "compression"
            String fileExt = FilenameUtils.getExtension(multipartFile.getOriginalFilename());
            Iterator<ImageWriter> writers = ImageIO.getImageWritersByFormatName(fileExt);
            if (!writers.hasNext())
                throw new IllegalStateException("No image writers found");

            Iterator<ImageReader> readers = ImageIO.getImageReadersByFormatName(fileExt);
            if (!readers.hasNext())
                throw new IllegalStateException("No image readers found");

            float quality = fileExt.compareToIgnoreCase("png") == 0 ? 0.01f : 0.5f;

            File isFile = new File(filePath.toString());
            ImageInputStream is = ImageIO.createImageInputStream(isFile);
            File osFile = new File(uploadPath.resolve("cmp-" + fileName).toString());
            ImageOutputStream os = ImageIO.createImageOutputStream(osFile);

            ImageReader reader = ImageIO.getImageReaders(is).next();
            reader.setInput(is);
            BufferedImage image = reader.read(0);

            ImageWriter writer = (ImageWriter) writers.next();
            writer.setOutput(os);

            // set compression quality
            ImageWriteParam param = writer.getDefaultWriteParam();

            param.setCompressionMode(ImageWriteParam.MODE_EXPLICIT);
            param.setCompressionQuality(quality);

            writer.write(null, new IIOImage(image, null, null), param);

            is.close();
            os.close();
            writer.dispose();
        }
        catch (IOException ex)
        {
            throw new IOException("unable to save/compress image file: " + fileName, ex);
        }
    }
}
