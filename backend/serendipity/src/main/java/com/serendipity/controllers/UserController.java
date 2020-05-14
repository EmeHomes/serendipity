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
    public @ResponseBody String addUser (@RequestParam String name, @RequestParam String surname1, @RequestParam String surname2, @RequestParam int role,  @RequestParam String username, @RequestParam String mail, @RequestParam String password) {
        User n = new User();
        n.setName(name);
        n.setSurname1(surname1);
        n.setSurname2(surname2);
        n.setRole(role);
        n.setUsername(username);
        n.setMail(mail);
        n.setPassword(password);
        userRepository.save(n);
        return "Saved";
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @PostMapping(path = "/user/{id}")
    public @ResponseBody String updateUser (@PathVariable int id, @RequestParam String name, @RequestParam String surname1, @RequestParam String surname2, @RequestParam String mail, @RequestParam String password) {
        Optional<User> n = this.userRepository.findById(id);
        n.ifPresent(found -> {
            found.setName(name);
            found.setSurname1(surname1);
            found.setSurname2(surname2);
            found.setMail(mail);
            found.setPassword(password);
            userRepository.save(found);
        });
        return "Saved";
    }
}

