package com.acme.squishimg.exception;

public class ImageEntityNotFoundException extends RuntimeException {
    public ImageEntityNotFoundException(String message) {
        super(message);
    }
}
