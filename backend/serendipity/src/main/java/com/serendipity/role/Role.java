package com.serendipity.role;

public class Role {
    private int id;
    private int userRole;

    public Role(int id, int userRole) {
        this.id = id;
        this.userRole = userRole;
    }

    public int getId() {
        return id;
    }

    public int getUserRole() {
        return userRole;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setUserRole(int userRole) {
        this.userRole = userRole;
    }

    @Override
    public String toString() {
        return "Role{" +
                "id=" + id +
                ", userRole=" + userRole +
                '}';
    }
}
