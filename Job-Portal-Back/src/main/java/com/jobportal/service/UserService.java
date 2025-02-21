package com.jobportal.service;


import com.jobportal.dto.LoginDto;
import com.jobportal.dto.UserDto;
import com.jobportal.exception.JobPortalException;


public interface UserService {
    
    public UserDto registerUser(UserDto userDto) throws JobPortalException;

    public UserDto loginUser(LoginDto loginDto) throws JobPortalException;
}
