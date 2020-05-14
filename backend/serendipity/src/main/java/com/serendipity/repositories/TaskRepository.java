package com.serendipity.repositories;

import org.springframework.data.repository.CrudRepository;
import com.serendipity.entities.Task;

public interface TaskRepository extends CrudRepository<Task, Integer> {
}
