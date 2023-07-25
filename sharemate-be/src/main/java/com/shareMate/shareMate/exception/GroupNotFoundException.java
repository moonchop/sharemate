package com.shareMate.shareMate.exception;

public class GroupNotFoundException extends RuntimeException {
    public GroupNotFoundException(String msg) {
        super(msg);
    }

    public GroupNotFoundException() {
        super("그룹 없음");
    }
}

