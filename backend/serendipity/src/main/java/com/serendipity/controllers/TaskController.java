package com.serendipity.controllers;

import com.serendipity.entities.Status;
import com.serendipity.entities.Task;
import com.serendipity.entities.User;
import com.serendipity.repositories.StatusRepository;
import com.serendipity.repositories.TaskRepository;
import com.serendipity.repositories.UserRepository;
import org.apache.tomcat.jni.Error;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private StatusRepository statusRepository;

    @Autowired
    private UserRepository userRepository;

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping(path = "/task")
    public @ResponseBody
    Iterable<Task> getTask() {
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
    public String addTasks(@RequestParam int user_id, String name, String description, String start_date, String finish_date, int status_id) {
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
    public @ResponseBody
    String updateTask(@PathVariable int id, @RequestParam String name, @RequestParam String description, @RequestParam int status_id, @RequestParam String start_date, @RequestParam String finish_date, @RequestParam int user_id) {
        Optional<Status> getStatusById = statusRepository.findById(status_id);
        if (!getStatusById.isPresent()) {
            return "El estado con el id " + status_id + " no existe";
        }

        Optional<User> getUserById = userRepository.findById(user_id);
        if (!getUserById.isPresent()) {
            return "El usuario con el id " + user_id + " no existe";
        }

        Optional<Task> n = this.taskRepository.findById(id);
        Status status = getStatusById.get();
        n.ifPresent(found -> {
            found.setName(name);
            found.setDescription(description);
            found.setStatus(status);
            found.setStart_date(start_date);
            found.setFinish_date(finish_date);
            found.setUser_id(user_id);
            taskRepository.save(found);
        });
        return "Tarea guardada";
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @DeleteMapping(path = "/task/{id}")
    public int deleteById (@PathVariable int id) {
        Optional<Task> n = this.taskRepository.findById(id);
        n.ifPresent(found -> {
            taskRepository.delete(found);
        });
        if (n.isPresent()) {
            return 1;
        } else {
            return 0;
        }
    }
}
