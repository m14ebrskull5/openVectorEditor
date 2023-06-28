package com.example.ove.vo;

public class MyResponse {
    Long code;

    String message;

    Object data;

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public MyResponse(Long code, String message, Object data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public Long getCode() {
        return code;
    }

    public void setCode(Long code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public static MyResponse success(String result) {
        return new MyResponse(200L, result, null);
    }
    public static MyResponse success(String result, Object data) {
        return new MyResponse(200L, result, data);
    }
}
