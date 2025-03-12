package com.jobportal.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

/**
 * Configuration class for Spring Security settings.
 * Defines beans and security rules for the application.
 */
@Configuration
public class SecurityConfig {

    /**
     * Creates a password encoder bean for securely hashing passwords.
     * 
     * @return BCryptPasswordEncoder instance for password encryption
     */
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
    
    /**
     * Configures the security filter chain with HTTP security settings.
     * Currently allows all requests and disables CSRF protection.
     * 
     * @param http HttpSecurity object to configure
     * @return Configured SecurityFilterChain
     * @throws Exception if security configuration fails
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http.authorizeHttpRequests((req)->req.requestMatchers("/**").permitAll().anyRequest().authenticated());
        http.csrf(csrf-> csrf.disable());
        return http.build();
    }
}
