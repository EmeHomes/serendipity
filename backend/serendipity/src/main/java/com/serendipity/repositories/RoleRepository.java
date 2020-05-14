package com.serendipity.repositories;

import org.springframework.data.repository.CrudRepository;
import com.serendipity.entities.Role;

public interface RoleRepository extends CrudRepository<Role, Integer>{
}
