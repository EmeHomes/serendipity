package com.serendipity.controllers;

import com.serendipity.entities.User;
import com.serendipity.helpers.EncoderHelper;
import com.serendipity.login.Login;
import com.serendipity.login.LoginService;
import com.serendipity.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EncoderHelper encoderHelper;

    @PostMapping(path = "/login")
    public User authentication(@RequestParam String username, @RequestParam String password) {
        return this.userRepository.authentication(username, this.encoderHelper.encrypt(password));
    }
}
