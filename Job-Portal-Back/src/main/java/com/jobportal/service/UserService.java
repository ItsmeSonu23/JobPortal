package com.jobportal.service;


import com.jobportal.dto.LoginDto;
import com.jobportal.dto.ResponseDto;
import com.jobportal.dto.UserDto;
import com.jobportal.exception.JobPortalException;

public interface UserService {
    
    public UserDto registerUser(UserDto userDto) throws JobPortalException;

    public UserDto loginUser(LoginDto loginDto) throws JobPortalException;

    public Boolean sendOtp(String email) throws Exception;

    public Boolean verifyOtp(String email, String otp) throws Exception;

    public ResponseDto changePassword(LoginDto loginDto) throws JobPortalException;
}
