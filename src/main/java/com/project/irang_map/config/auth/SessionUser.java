package com.project.irang_map.config.auth;

import java.io.Serializable;

import com.project.irang_map.domain.user.User;

import lombok.Getter;

@Getter
public class SessionUser implements Serializable {
    private String name;
    private String email;
    private String picture;

    public SessionUser(User user) {
        this.name = user.getName();
        this.email = user.getEmail();
        this.picture = user.getPicture();
    }
}