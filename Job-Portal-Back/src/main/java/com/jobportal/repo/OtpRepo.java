package com.jobportal.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.jobportal.entity.Otp;
import java.time.LocalDateTime;


public interface OtpRepo extends MongoRepository<Otp,String> {

    List<Otp> findByCreationTimeBefore(LocalDateTime expiry);
}