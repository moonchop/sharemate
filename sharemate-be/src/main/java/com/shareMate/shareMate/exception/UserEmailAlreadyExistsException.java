package com.shareMate.shareMate.exception;

public class UserEmailAlreadyExistsException extends RuntimeException{
    public UserEmailAlreadyExistsException(String message){
        super(message);
    }
}
