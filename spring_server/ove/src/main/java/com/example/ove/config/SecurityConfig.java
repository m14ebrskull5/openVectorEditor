package com.example.ove.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;

@Configuration
public class SecurityConfig {
    @Bean
    MyAuthenticationFailureHandler get() {
        return new MyAuthenticationFailureHandler();
    }

    @Bean
    SecurityFilterChain configure(HttpSecurity http, MyAuthenticationFailureHandler handler) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authenticationManager(new MyAuthenticationManager())
                .authorizeHttpRequests((authorize) -> authorize
                        .requestMatchers("/api/login").permitAll()
                        .anyRequest().authenticated()
                ).formLogin(formLogin -> formLogin
                        .failureHandler(handler).successHandler(new MySuccessHandler())
                )
                .exceptionHandling(h -> h.authenticationEntryPoint(new MyAuthEntryPoint()))
        ;
        // @formatter:on
        return http.build();
    }

    @Bean
    public InMemoryUserDetailsManager userDetailsService() {
        UserDetails alice = User.withDefaultPasswordEncoder()
                .username("alice")
                .password("alice")
                .roles("USER")
                .build();
        UserDetails bob = User.withDefaultPasswordEncoder()
                .username("bob")
                .password("bob")
                .roles("USER")
                .build();
        UserDetails mike = User.withDefaultPasswordEncoder()
                .username("mike")
                .password("mike")
                .roles("USER")
                .build();
        return new InMemoryUserDetailsManager(alice, bob, mike);
    }
}
