package com.shareMate.shareMate.advice;

import com.shareMate.shareMate.dto.response.BaseResponse;
import com.shareMate.shareMate.exception.SignUpFailureException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class CustomResponseEntityExceptionHandler {

    @ExceptionHandler(SignUpFailureException.class)
    protected ResponseEntity<BaseResponse> invalidInputException(SignUpFailureException e) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new BaseResponse(e.getMessage()));
    }

}
