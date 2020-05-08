package com.serendipity.login;

import com.serendipity.user.User;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Component
public class LoginService {
    private static List<User> users = new ArrayList<>();

    static {
      users.add(new User(1, 1, "admin", "admin", "María", "Sánchez", "Casas", "", "mscasas.94@gmail.com"));
      users.add(new User(2, 1, "user", "user", "Aitor", "Tilla", "Amarilla", "", "Emortri@gmail.com"));
    }

    public Login authentication(String userName, String password) {
        for (User user:users) {
            if (userName.equals(user.getUserName())) {
                if (password.equals(user.getPassword())) {
                    return new Login(UUID.randomUUID().toString());
                }
            }
        }

        return null;
    }
}
