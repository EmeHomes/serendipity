package com.serendipity.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.serendipity.entities.Task;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface TaskRepository extends CrudRepository<Task, Integer> {

    @Query("SELECT t FROM Task t where t.user_id = :user_id")
    List<Task> findAllByUserId(@Param("user_id") int user_id);
}
