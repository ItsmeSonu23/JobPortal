package com.jobportal.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.jobportal.entity.Profile;

public interface ProfileRepo extends MongoRepository<Profile,Long> {
    
}
