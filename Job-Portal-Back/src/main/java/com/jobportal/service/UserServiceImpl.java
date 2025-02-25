package com.jobportal.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.jobportal.dto.LoginDto;
import com.jobportal.dto.ResponseDto;
import com.jobportal.dto.UserDto;
import com.jobportal.entity.Otp;
import com.jobportal.entity.User;
import com.jobportal.exception.JobPortalException;
import com.jobportal.repo.OtpRepo;
import com.jobportal.repo.UserRepo;
import com.jobportal.utility.Data;
import com.jobportal.utility.Utilities;

import jakarta.mail.internet.MimeMessage;

@Service(value = "userService")
public class UserServiceImpl implements UserService {
    @Autowired
    private ProfileService profileService;

    @Autowired
    private UserRepo userRepo; // Injecting the UserRepo to interact with the database.

    @Autowired
    private ModelMapper modelMapper; // Used to convert between DTOs and entities.

    @Autowired
    private PasswordEncoder passwordEncoder; // For encoding and decoding passwords.

    @Autowired
    private OtpRepo otpRepo;

    @Autowired
    private JavaMailSender mailSender; // For sending emails (used in OTP generation).

    @Override
    public UserDto registerUser(UserDto userDto) throws JobPortalException {
        // Check if user already exists based on the provided email.
        Optional<User> optional = userRepo.findByEmail(userDto.getEmail());
        if (optional.isPresent()) {
            throw new JobPortalException("User Already Exist"); // Throw an exception if user is found.
        }
        userDto.setProfileId(profileService.createProfile(userDto.getEmail()));
        // Set ID and encode the password before saving.
        userDto.setId(Utilities.getNextSequence("users")); // Get the next sequence ID for the user.
        userDto.setPassword(passwordEncoder.encode(userDto.getPassword())); // Encode the password for security.

        // Convert UserDto to User entity and save it to the repository.
        User user = modelMapper.map(userDto, User.class);
        user = userRepo.save(user); // Save the user entity to the database.

        // Convert the saved User entity back to UserDto and return it.
        return modelMapper.map(user, UserDto.class);
    }

    @Override
    public UserDto loginUser(LoginDto loginDto) throws JobPortalException {
        // Retrieve the user from the database based on email, or throw an exception if
        // not found.
        User user = userRepo.findByEmail(loginDto.getEmail())
                .orElseThrow(() -> new JobPortalException("USER_NOT_FOUND"));

        // Verify the entered password matches the stored one.
        if (!passwordEncoder.matches(loginDto.getPassword(), user.getPassword())) {
            throw new JobPortalException("INVALID_CREDENTIALS"); // Throw an exception for invalid credentials.
        }

        // Convert the User entity to UserDto and return it.
        return modelMapper.map(user, UserDto.class);
    }

    @Override
    public Boolean sendOtp(String email) throws Exception {
        // Retrieve the user based on email, or throw an exception if not found.
        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new JobPortalException("USER_NOT_FOUND"));

        // Create and configure the email message (for OTP sending).
        MimeMessage mm = mailSender.createMimeMessage();
        MimeMessageHelper msg = new MimeMessageHelper(mm, true); // Enable multipart (for HTML content).
        msg.setTo(email); // Set the recipient email.
        msg.setSubject("Your OTP code from Clover"); // Set the email subject.

        // Generate the OTP (using a utility method).
        String genOtp = Utilities.generateOTP();

        Otp otp = new Otp(email, genOtp, LocalDateTime.now());
        otpRepo.save(otp);
        msg.setText(Data.getMessageBody(user.getName(), genOtp), true);
        mailSender.send(mm);
        return true; // Placeholder, modify as needed to actually send the OTP.
    }

    @Override
    public Boolean verifyOtp(String email, String otp) throws Exception {
        Otp otpentity = otpRepo.findById(email).orElseThrow(() -> new JobPortalException("OTP_NOT_FOUND"));
        if (!otpentity.getOtpCode().equals(otp))
            throw new JobPortalException("OTP_INCORRECT");
        return true;
    }

    @Override
    public ResponseDto changePassword(LoginDto loginDto) throws JobPortalException {

        User user = userRepo.findByEmail(loginDto.getEmail()).orElseThrow(() -> new JobPortalException("OTP_NOT_FOUND"));
        user.setPassword(passwordEncoder.encode(loginDto.getPassword()));
        userRepo.save(user);
        return new ResponseDto("Password changed succesfully!");
    }

    @Scheduled(fixedRate = 60000)
    public void removeExpiredOtps(){
        LocalDateTime expiry = LocalDateTime.now().minusMinutes(5);
        List<Otp> expiredOtps =  otpRepo.findByCreationTimeBefore(expiry);
        if(!expiredOtps.isEmpty()){
            otpRepo.deleteAll(expiredOtps);
        }
    }
}
