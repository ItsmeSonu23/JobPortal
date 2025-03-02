package com.jobportal.service;

import java.util.List;

import com.jobportal.dto.JobDto;
import com.jobportal.exception.JobPortalException;


public interface JobService {

    public JobDto postJob(JobDto jobDto) throws JobPortalException;
    public List<JobDto> getAllJobs() throws JobPortalException;
    public JobDto getJobById(Long id) throws JobPortalException;

    
}