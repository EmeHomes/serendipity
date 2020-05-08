package com.serendipity.login;

public class Login {
    private String token;

    public Login(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @Override
    public String toString() {
        return "Login{" +
                "token='" + token + '\'' +
                '}';
    }
}
