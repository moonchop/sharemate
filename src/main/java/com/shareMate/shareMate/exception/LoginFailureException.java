package com.shareMate.shareMate.exception;

public class LoginFailureException extends RuntimeException {
    public LoginFailureException(String msg) {
        super(msg);
    }

    public LoginFailureException() {
        super("로그인 실패");
    }
}
