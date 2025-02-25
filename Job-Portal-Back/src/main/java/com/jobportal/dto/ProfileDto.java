package com.jobportal.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProfileDto {
    private Long id;
    private String email;
    private String JobTitle;
    private String company;
    private String location;
    private String about;
    private List<String> skills;
    private List<Expirience> expiriences;
    private List<Certification> certifications;
}
