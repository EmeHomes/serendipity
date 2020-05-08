package com.serendipity.role;

public class RoleController {
    private boolean admin;
    private boolean user;

    public RoleController(boolean admin, boolean user) {
        this.admin = admin;
        this.user = user;
    }

    public boolean isAdmin() {
        return admin;
    }

    public boolean isUser() {
        return user;
    }

    public void setAdmin(boolean admin) {
        this.admin = admin;
    }

    public void setUser(boolean user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "RoleController{" +
                "admin=" + admin +
                ", user=" + user +
                '}';
    }
}
