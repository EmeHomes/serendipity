package com.serendipity.controllers;


import com.serendipity.entities.Task;
import com.serendipity.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
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

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping(path = "/task/{user_id}")
    public Iterable<Task> getUserTasks(@PathVariable int user_id) {
        return this.taskRepository.findAllById(Collections.singleton(user_id));
    }


    @CrossOrigin(origins = "http://localhost:8080")
    @PostMapping(path = "/task")
    public @ResponseBody String addTasks(@RequestParam int user_id, String name, String description, String start_date, String finish_date) {
      Task n = new Task();
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
        Optional<Task> n = this.taskRepository.findById(id);
        n.ifPresent(found -> {
            found.setName(name);
            found.setDescription(description);
            found.setStatus_id(status_id);
            taskRepository.save(found);
        });
        return "Tarea guardada";
    }
}
