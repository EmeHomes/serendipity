package com.serendipity.controllers;

import com.serendipity.entities.Role;
import com.serendipity.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class RoleController {
    private String admin;
    private String user;


    @Autowired
    private RoleRepository roleRepository;

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping(path = "/role")
    public  @ResponseBody Iterable<Role> getRole() {
        return this.roleRepository.findAll();
    }


}
