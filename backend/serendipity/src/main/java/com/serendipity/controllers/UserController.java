package com.serendipity.controllers;


import com.serendipity.entities.User;
import com.serendipity.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping(path = "/users")
    public  @ResponseBody Iterable<User> getUsers() {
        return this.userRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping(path = "/users/{id}")
    public Optional<User> getUser(@PathVariable int id) {
        return this.userRepository.findById(id);
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @PostMapping(path = "/users")
    public @ResponseBody String addUser (@RequestParam String name, @RequestParam String mail) {
        User n = new User();
        n.setName(name);
        n.setMail(mail);
        userRepository.save(n);
        return "Saved";
    }
}

