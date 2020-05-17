package com.serendipity.controllers;


import com.serendipity.entities.Status;
import com.serendipity.entities.Task;
import com.serendipity.repositories.StatusRepository;
import com.serendipity.repositories.TaskRepository;
import org.apache.tomcat.jni.Error;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private StatusRepository statusRepository;

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping(path = "/task")
    public @ResponseBody Iterable<Task> getTask() {
        return this.taskRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping(path = "/task/{id}")
    public Optional<Task> getTasks(@PathVariable int id) {
        return this.taskRepository.findById(id);
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping(path = "/task/user/{user_id}")
    public Iterable<Task> getUserTasks(@PathVariable int user_id) {
        return this.taskRepository.findAllByUserId(user_id);
    }


    @CrossOrigin(origins = "http://localhost:8080")
    @PostMapping(path = "/task")
    public @ResponseBody
    String addTasks(@RequestParam int user_id, String name, String description, String start_date, String finish_date, int status_id) {
        Optional<Status> getStatusById = statusRepository.findById(status_id);
        if (!getStatusById.isPresent()) {
            return "El estado con el id " + status_id + " no existe";
        }
        Status status = getStatusById.get();
        Task n = new Task();
        n.setStatus(status);
        n.setUser_id(user_id);
        n.setName(name);
        n.setDescription(description);
        n.setStart_date(start_date);
        n.setFinish_date(finish_date);
        this.taskRepository.save(n);
        return "Tarea editada";

    }

    @CrossOrigin(origins = "http://localhost:8080")
    @PostMapping(path = "/task/{id}")
    public @ResponseBody String updateTask (@PathVariable int id, @RequestParam String name, @RequestParam String description, @RequestParam int status_id) {
        Optional<Status> getStatusById = statusRepository.findById(status_id);
        if (!getStatusById.isPresent()) {
            return "El estado con el id " + status_id + " no existe";
        }
        Optional<Task> n = this.taskRepository.findById(id);
        Status status = getStatusById.get();
        n.ifPresent(found -> {
            found.setName(name);
            found.setDescription(description);
            found.setStatus(status);
            taskRepository.save(found);
        });
        return "Tarea guardada";
    }
}
