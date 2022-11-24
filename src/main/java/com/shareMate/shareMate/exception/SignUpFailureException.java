package com.shareMate.shareMate.exception;

public class SignUpFailureException extends RuntimeException{

    public SignUpFailureException(){
        super("회원가입 실패");
    }
    public SignUpFailureException(String msg){
        super(msg);
    }
}
