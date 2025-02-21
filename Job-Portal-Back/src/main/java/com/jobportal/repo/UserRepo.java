package com.jobportal.repo;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.jobportal.entity.User;

public interface UserRepo extends MongoRepository<User,Long> {
    public Optional<User> findByEmail(String email);
}
