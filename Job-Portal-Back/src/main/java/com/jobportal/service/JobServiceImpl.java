package com.jobportal.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobportal.dto.JobDto;
import com.jobportal.entity.Job;
import com.jobportal.exception.JobPortalException;
import com.jobportal.repo.JobRepo;
import com.jobportal.utility.Utilities;

@Service("jobService")
public class JobServiceImpl implements JobService {
    @Autowired
    private JobRepo jobRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public JobDto postJob(JobDto jobDto) throws JobPortalException {
        // Set ID and post time
        jobDto.setId(Utilities.getNextSequence("jobs"));
        jobDto.setPostTime(LocalDateTime.now());

        // Map JobDto to JobEntity using ModelMapper
        Job job = modelMapper.map(jobDto, Job.class);

        // Save JobEntity to the repository
        Job savedJob = jobRepo.save(job);

        // Optionally map saved JobEntity back to JobDto to return it
        return modelMapper.map(savedJob, JobDto.class);
    }

    @Override
    public List<JobDto> getAllJobs() throws JobPortalException {
        return jobRepo.findAll().stream()
                .map(jobEntity -> modelMapper.map(jobEntity, JobDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public JobDto getJobById(Long id) throws JobPortalException {
       Job job=  jobRepo.findById(id).orElseThrow(()-> new JobPortalException("JOB_NOT_FOUND"));
       return modelMapper.map(job, JobDto.class);
    }

}
