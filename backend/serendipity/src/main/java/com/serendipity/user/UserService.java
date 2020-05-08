package com.serendipity.user;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class UserService {
    private static List<User> users = new ArrayList<>();

    static {
        users.add(new User(1, 1, "admin", "admin", "María", "Sánchez", "Casas", "", "mscasas.94@gmail.com"));
        users.add(new User(2, 1, "user", "user", "Aitor", "Tilla", "Amarilla", "", "Emortri@gmail.com"));
    }

    public List<User> findAll() {
        return users;
    }

    public User save(User user) {
        users.add(user);
        return user;
    }

    public User find(int id) {
        for (User user:users) {
            if (id == user.getId()) {
                return user;
            }
        }

        return null;
    }
}
