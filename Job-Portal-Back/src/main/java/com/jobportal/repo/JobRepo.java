package com.jobportal.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.jobportal.entity.Job;

public interface JobRepo extends MongoRepository<Job, Long>{
    
}
