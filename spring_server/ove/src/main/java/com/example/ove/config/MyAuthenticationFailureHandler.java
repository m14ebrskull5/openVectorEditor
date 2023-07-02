package com.example.ove.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import java.io.IOException;
import java.util.HashMap;

public class MyAuthenticationFailureHandler implements AuthenticationFailureHandler {

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        response.setContentType("application/json");
        response.setHeader("Access-Control-Allow-Origin", request.getHeader("origin"));
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Allow-Methods", "POST,GET,PUT");
        response.setStatus(HttpStatus.OK.value());
        HashMap<String,Object> user = new HashMap<>();
        user.put("code", -1);
        user.put("message", exception.getLocalizedMessage());
        ObjectMapper mapper = new ObjectMapper();
        var out = mapper.writeValueAsString(user);
        response.setCharacterEncoding("utf-8");
        response.getWriter().println(out);
    }
}
