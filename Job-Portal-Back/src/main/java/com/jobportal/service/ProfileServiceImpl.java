package com.jobportal.service;

import java.util.ArrayList;
import java.util.Base64;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobportal.dto.ProfileDto;
import com.jobportal.entity.Profile;
import com.jobportal.exception.JobPortalException;
import com.jobportal.repo.ProfileRepo;
import com.jobportal.utility.Utilities;

@Service("profileService")
public class ProfileServiceImpl implements ProfileService {
    @Autowired
    private ProfileRepo profileRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public Long createProfile(String email) throws JobPortalException {
        Profile profile = new Profile();
        profile.setId(Utilities.getNextSequence("profiles"));
        profile.setEmail(email);
        profile.setSkills(new ArrayList<>());
        profile.setExpiriences(new ArrayList<>());
        profile.setCertifications(new ArrayList<>());
        profileRepo.save(profile);
        return profile.getId();
    }

    @Override

    public ProfileDto getProfile(Long id) throws JobPortalException {
        // Fetch the profile entity from the repository
        Profile profile = profileRepo.findById(id).orElseThrow(() -> new JobPortalException("PROFILE_NOT_FOUND"));
        // Convert the Profile entity to ProfileDto using ModelMapper
        return modelMapper.map(profile, ProfileDto.class);
    }

    @Override
    public ProfileDto updateProfile(ProfileDto profileDto) throws JobPortalException {
       Profile existingProfile =  profileRepo.findById(profileDto.getId()).orElseThrow(() -> new JobPortalException("PROFILE_NOT_FOUND"));
        if (profileDto.getPicture() != null) {
            existingProfile.setPicture(Base64.getDecoder().decode(profileDto.getPicture()));
        }
    
        profileRepo.save(modelMapper.map(profileDto, Profile.class));
        // Convert the Profile entity to ProfileDto using ModelMapper
        return profileDto;
    }

}
