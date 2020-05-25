package com.serendipity.repositories;

import com.serendipity.entities.Task;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.serendipity.entities.User;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Integer> {

    @Query("SELECT u FROM User u where u.username = :username and u.password = :password")
    User authentication(@Param("username") String username, @Param("password") String password);

}
