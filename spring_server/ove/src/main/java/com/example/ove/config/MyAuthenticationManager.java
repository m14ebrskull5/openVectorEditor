package com.example.ove.config;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;
import java.util.HashMap;

public class MyAuthenticationManager implements AuthenticationManager {
    class User {
        public String avatar;

        public User(String avatar) {
            this.avatar = avatar;
        }
    }
    private HashMap<String, User> userDb;

    public static class MyAuthentication implements Authentication {

        private final String avatar;
        private final String username;

        public String getAvatar() {
            return avatar;
        }

        public String getUsername() {
            return username;
        }

        public MyAuthentication(String avatar, String username) {
            this.avatar = avatar;
            this.username = username;
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return null;
        }

        @Override
        public Object getCredentials() {
            return null;
        }

        @Override
        public Object getDetails() {
            return this.avatar;
        }

        @Override
        public Object getPrincipal() {
            return null;
        }

        @Override
        public boolean isAuthenticated() {
            return true;
        }

        @Override
        public void setAuthenticated(boolean isAuthenticated) throws IllegalArgumentException {

        }

        @Override
        public String getName() {
            return null;
        }
    }
    public MyAuthenticationManager() {
        userDb = new HashMap<>();
        userDb.put("alice", new User("https://yt3.ggpht.com/I8ok4xm-UXSWqHWdmIPFQKIK8XMY13vZOFmFUZFO7p0OseafzmPjGqR4lJPKkP7IVqnI-m5c=s68-c-k-c0x00ffffff-no-rj"));
        userDb.put("bob", new User("https://yt3.ggpht.com/ytc/AGIKgqOMKd-PSbLmgJHynEBgLOgD8Hx5daZgQyYcCUCd=s68-c-k-c0x00ffffff-no-rj"));
        userDb.put("mike", new User("https://yt3.googleusercontent.com/rSFBvQ6QUaIU7vdueXRtrmHEIMHnKgwBe7Dq_xgYWbrPAdWf7QIb9SBHxCjGQuyC4tGy4mh0zw=s176-c-k-c0x00ffffff-no-rj"));
    }
    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        User user = userDb.get((String) authentication.getPrincipal());
        return new MyAuthentication(user.avatar, (String)authentication.getPrincipal());
    }
}
