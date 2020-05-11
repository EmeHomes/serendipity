package com.serendipity.user;

import com.serendipity.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class UserController {

    @Autowired
    private UserService userService;

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping(path = "/users")
    public List<User> getUsers() {
        return this.userService.findAll();
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping(path = "/users/{id}")
    public User getUsers(@PathVariable int id) {
        return this.userService.find(id);
    }


    @PostMapping(path = "/users")
    public User setUser(@RequestBody User user) {
        return this.userService.save(user);
    }
}

