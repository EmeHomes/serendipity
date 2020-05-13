package com.serendipity.login;

import com.serendipity.entities.User;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class LoginService {
    private static List<User> users = new ArrayList<>();

    static {

    }

    public Login authentication(String userName, String password) {


        return null;
    }
}
