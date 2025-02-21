package com.jobportal.service;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.jobportal.dto.LoginDto;
import com.jobportal.dto.UserDto;
import com.jobportal.entity.User;
import com.jobportal.exception.JobPortalException;
import com.jobportal.repo.UserRepo;
import com.jobportal.utility.Utilities;

@Service(value = "userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDto registerUser(UserDto userDto)throws JobPortalException {
        Optional<User> optional = userRepo.findByEmail(userDto.getEmail());
        if(optional.isPresent()){
            throw new JobPortalException("User Already Exist");
        }
        userDto.setId(Utilities.getNextSequence("users"));
        userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
        User user = modelMapper.map(userDto, User.class);
        user = userRepo.save(user);
        return modelMapper.map(user,UserDto.class);
    }

    @Override
    public UserDto loginUser(LoginDto loginDto) throws JobPortalException {
       User user = userRepo.findByEmail(loginDto.getEmail()).orElseThrow(()-> new JobPortalException("USER_NOT_FOUND"));
       if(!passwordEncoder.matches(loginDto.getPassword(), user.getPassword())){
            throw new JobPortalException("INVALID_CREDENTIALS");
       }
       return modelMapper.map(user,UserDto.class);
    }


    
    
}
