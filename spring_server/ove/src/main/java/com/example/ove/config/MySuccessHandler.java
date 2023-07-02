package com.example.ove.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.util.MimeType;
import org.springframework.util.MimeTypeUtils;

import java.io.IOException;
import java.util.HashMap;

public class MySuccessHandler implements AuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authentication) throws IOException, ServletException {
        AuthenticationSuccessHandler.super.onAuthenticationSuccess(request, response, chain, authentication);
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        response.setStatus(HttpStatus.OK.value());
        response.setContentType(MimeTypeUtils.APPLICATION_JSON_VALUE);
        response.setHeader("Access-Control-Allow-Origin", request.getHeader("origin"));
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Allow-Methods", "POST,GET,PUT");
        HashMap<String,Object> user = new HashMap<>();
        user.put("code", 0);
        user.put("username", authentication.getName());
        user.put("avatar", "https://benchling-free-us-east-1-general.s3.amazonaws.com/deploys/academic/a//2l8Fa1HZR0PAZ8240GE27n1J85Zfay4pWIJaR9NI/ent_k4IYH0NV-128.png");
        ObjectMapper mapper = new ObjectMapper();
        String out = mapper.writeValueAsString(user);
        response.setCharacterEncoding("utf-8");
        response.getWriter().println(out);
    }
}
