package com.jobportal.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobportal.dto.ApplicantDto;
import com.jobportal.dto.Application;
import com.jobportal.dto.ApplicationStatus;
import com.jobportal.dto.JobDto;
import com.jobportal.entity.Applicant;
import com.jobportal.entity.Job;
import com.jobportal.exception.JobPortalException;
import com.jobportal.repo.JobRepo;
import com.jobportal.utility.Utilities;

/**
 * Implementation of the JobService interface that provides job posting and application management functionality.
 * Handles job creation, retrieval, applications and status updates.
 */
@Service("jobService")
public class JobServiceImpl implements JobService {
    @Autowired
    private JobRepo jobRepo;

    @Autowired
    private ModelMapper modelMapper;

    /**
     * Creates a new job posting with auto-generated ID and current timestamp.
     *
     * @param jobDto The job details to post
     * @return JobDto containing the posted job information
     * @throws JobPortalException if job creation fails
     */
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

    /**
     * Retrieves all available job postings.
     *
     * @return List of JobDto containing all job postings
     * @throws JobPortalException if retrieval fails
     */
    @Override
    public List<JobDto> getAllJobs() throws JobPortalException {
        return jobRepo.findAll().stream()
                .map(jobEntity -> modelMapper.map(jobEntity, JobDto.class))
                .collect(Collectors.toList());
    }

    /**
     * Retrieves a specific job posting by its ID.
     *
     * @param id The ID of the job to retrieve
     * @return JobDto containing the job information
     * @throws JobPortalException if job not found
     */
    @Override
    public JobDto getJobById(Long id) throws JobPortalException {
        Job job = jobRepo.findById(id).orElseThrow(() -> new JobPortalException("JOB_NOT_FOUND"));
        return modelMapper.map(job, JobDto.class);
    }

    /**
     * Submits a job application for a specific job posting.
     * Checks if applicant has already applied and initializes application status.
     *
     * @param id The ID of the job being applied to
     * @param applicantDto The applicant's information
     * @throws JobPortalException if job not found or applicant has already applied
     */
    @Override
    public void applyJob(Long id, ApplicantDto applicantDto) throws JobPortalException {
        // Find job by ID
        Job job = jobRepo.findById(id).orElseThrow(() -> new JobPortalException("JOB_NOT_FOUND"));

        // Get the list of applicants
        List<Applicant> applicants = job.getApplicants();
        if (applicants == null)
            applicants = new ArrayList<>();

        // Check if the applicant has already applied
        boolean isAlreadyApplied = applicants.stream()
                .anyMatch(applicant -> applicant.getApplicantId().equals(applicantDto.getApplicantId()));

        if (isAlreadyApplied) {
            throw new JobPortalException("JOB_APPLIED_ALREADY");
        }

        // Set the application status
        applicantDto.setApplicationStatus(ApplicationStatus.APPLIED);

        // Use ModelMapper to map the ApplicantDto to Applicant entity
        Applicant applicant = modelMapper.map(applicantDto, Applicant.class);

        // Add the applicant to the list
        applicants.add(applicant);

        // Set the updated applicants list back to the job
        job.setApplicants(applicants);

        // Save the job
        jobRepo.save(job);
    }

    /**
     * Retrieves all jobs posted by a specific user/recruiter.
     *
     * @param id The ID of the user/recruiter
     * @return List of JobDto containing the user's job postings
     * @throws JobPortalException if retrieval fails
     */
    @Override
    public List<JobDto> getJobsPostedBy(Long id) throws JobPortalException {
        return jobRepo.findByPostedBy(id).stream().map((x) -> modelMapper.map(x, JobDto.class)).toList();
    }

    /**
     * Updates the status of a job application.
     * Sets interview time if status is changed to INTERVIEWING.
     *
     * @param applicantion The application with updated status
     * @throws JobPortalException if job not found
     */
    @Override
    public void changeAppStatus(Application applicantion) throws JobPortalException {
        Job job = jobRepo.findById(applicantion.getId()).orElseThrow(() -> new JobPortalException("JOB_NOT_FOUND"));

        // Get the list of applicants
        List<Applicant> applicants = job.getApplicants().stream().map((x) -> {
            if (applicantion.getApplicantId() == x.getApplicantId()) {
                x.setApplicationStatus(applicantion.getApplicationStatus());
                if (applicantion.getApplicationStatus().equals(ApplicationStatus.INTERVEWING)) {
                    x.setInterviewTime(applicantion.getInterviewTime());
                }
            }
            return x;
        }).toList();
        job.setApplicants((applicants));
        jobRepo.save(job);
    }

}
