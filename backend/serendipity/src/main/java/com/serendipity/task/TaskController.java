package com.serendipity.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class TaskController {

    @Autowired
    private TaskService taskService ;

    @GetMapping(path = "/task")
    public List<Task> getTasks() {
        return this.taskService.findAll();
    }

    @GetMapping(path = "/task/users/{id}")
    public Task getTasks(@PathVariable int id) {
        return this.taskService.find(id);
    }

    @PostMapping(path = "/task")
    public Task setTasks(@RequestBody Task task) {
        return this.taskService.save(task);
    }
}
