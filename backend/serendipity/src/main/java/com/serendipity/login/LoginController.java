package com.serendipity.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class LoginController {

    @Autowired
    private LoginService loginService;

    @GetMapping(path = "/login/{userName}/{password}")
    public Login authentication(@PathVariable String userName, @PathVariable String password) {
        return this.loginService.authentication(userName, password);
    }
}
