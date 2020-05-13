package com.serendipity.repositories;

import org.springframework.data.repository.CrudRepository;
import com.serendipity.entities.User;

public interface UserRepository extends CrudRepository<User, Integer> {

}
