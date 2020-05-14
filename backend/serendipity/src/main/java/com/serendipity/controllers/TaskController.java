package com.serendipity.controllers;


import com.serendipity.entities.Task;
import com.serendipity.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class TaskController {

    @Autowired
    private TaskRepository taskRepository ;

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

    /*@CrossOrigin(origins = "http://localhost:8080")
    @GetMapping(path = "/task/users/{status}")
    public Optional<Task> getStatus(@PathVariable int status) {
        return this.taskRepository.findAllById(statusId);
    }*/

    @CrossOrigin(origins = "http://localhost:8080")
    @PostMapping(path = "/task")
    public @ResponseBody String addTasks(@RequestParam String name, String description, String start_date, String finish_date) {
      Task n = new Task();
      n.setName(name);
      n.setDescription(description);
      n.setStart_date(start_date);
      n.setFinish_date(finish_date);
      this.taskRepository.save(n);
      return "Task added";

    }
}
