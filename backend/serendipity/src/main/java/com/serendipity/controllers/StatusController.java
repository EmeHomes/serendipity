package com.serendipity.controllers;

import com.serendipity.entities.Status;
import com.serendipity.repositories.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class StatusController {

    @Autowired
    private StatusRepository statusRepository;

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping(path = "/status")
    public @ResponseBody Iterable<Status> getStatus() {
        return this.statusRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping(path = "/status/{id}/task/statusId")
    public Iterable<Status> getStatusById(@PathVariable int id) {
        return this.statusRepository.findAllById(id);
    }
}
