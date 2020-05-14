package com.serendipity.repositories;

import org.springframework.data.repository.CrudRepository;
import com.serendipity.entities.Status;

public interface StatusRepository extends CrudRepository<Status, Integer> {

    Iterable<Status> findAllById(int id);
}