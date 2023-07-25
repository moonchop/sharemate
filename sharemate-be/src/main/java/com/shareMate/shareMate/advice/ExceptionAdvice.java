package com.shareMate.shareMate.advice;



import com.shareMate.shareMate.dto.response.Response;
import com.shareMate.shareMate.exception.LoginFailureException;
import com.shareMate.shareMate.exception.UserEmailAlreadyExistsException;
import com.shareMate.shareMate.exception.UserNotFoundException;
import com.shareMate.shareMate.exception.type.ExceptionType;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.nio.file.AccessDeniedException;

import static com.shareMate.shareMate.exception.type.ExceptionType.*;

@RestControllerAdvice
@Slf4j
public class ExceptionAdvice {
    private final ResponseHandler responseHandler;

    public ExceptionAdvice(ResponseHandler responseHandler) {
        this.responseHandler = responseHandler;
    }

    //    @ExceptionHandler(Exception.class)
//    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
//    public Response exception(Exception e) {
//        System.out.println("hellodwdwdwdwdwdwdwdwdwdwdwdwd");
//        log.error("e = {}", e.getMessage());
//        return getFailureResponse(EXCEPTION);
//    }
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public Response exception(Exception e) { // 1
        log.info("e = {}", e.getMessage());
        return Response.failure(-1000, "오류가 발생하였습니다.");
    }
    @ExceptionHandler(AccessDeniedException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public Response accessDeniedException() {
        System.out.println("access 오류");
        return getFailureResponse(ACCESS_DENIED_EXCEPTION,"접근 실패 jwt 필요");
    }

    @ExceptionHandler(BindException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Response bindException(BindException e) {
        System.out.println("bad_request");
        return getFailureResponse(BIND_EXCEPTION, e.getBindingResult().getFieldError().getDefaultMessage());
    }

    @ExceptionHandler(LoginFailureException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public Response loginFailureException() {
        System.out.println("LoginFailureException");
        return Response.failure(-1004, "로그인에 실패하였습니다.");
//         return getFailureResponse(LOGIN_FAILURE_EXCEPTION);
    }

    @ExceptionHandler(UserEmailAlreadyExistsException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public Response memberEmailAlreadyExistsException(UserEmailAlreadyExistsException e) {
//        return getFailureResponse(MEMBER_EMAIL_ALREADY_EXISTS_EXCEPTION, e.getMessage());
        return Response.failure(-1005, e.getMessage() + " 은 중복된 이메일 입니다.");
    }

    @ExceptionHandler(UserNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Response memberNotFoundException() {

//        return getFailureResponse(MEMBER_NOT_FOUND_EXCEPTION);
        return Response.failure(-1007, "요청한 회원을 찾을 수 없습니다.");
    }
    private Response getFailureResponse(ExceptionType exceptionType) {
        return responseHandler.getFailureResponse(exceptionType);
    }

    private Response getFailureResponse(ExceptionType exceptionType, Object... args) {
        return responseHandler.getFailureResponse(exceptionType, args);
    }

}
