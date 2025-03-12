import axios from "axios";

/**
 * Base URL for user-related API endpoints
 */
const base_url = "http://localhost:8080/api/v1/users/";

/**
 * Registers a new user in the system
 * 
 * Makes a POST request to register endpoint with user data
 * 
 * @param {Object} user - User registration data
 * @param {string} user.email - User's email address
 * @param {string} user.password - User's password
 * @param {string} user.name - User's full name
 * @returns {Promise<Object>} Response data from successful registration
 * @throws {Error} If registration fails
 * 
 * @example
 * try {
 *   const userData = await registerUser({
 *     email: "user@example.com",
 *     password: "password123",
 *     name: "John Doe"
 *   });
 * } catch (error) {
 *   console.error("Registration failed:", error);
 * }
 */
export const registerUser = async (user: any) => {
    try {
        const res = await axios.post(`${base_url}register`, user);
        return res.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Authenticates a user and logs them in
 * 
 * Makes a POST request to login endpoint with credentials
 * 
 * @param {Object} user - User login credentials
 * @param {string} user.email - User's email address
 * @param {string} user.password - User's password
 * @returns {Promise<Object>} Response data containing auth token and user info
 * @throws {Error} If login fails
 * 
 * @example
 * try {
 *   const authData = await loginUser({
 *     email: "user@example.com",
 *     password: "password123"
 *   });
 * } catch (error) {
 *   console.error("Login failed:", error);
 * }
 */
export const loginUser = async (user: any) => {
    try {
        const res = await axios.post(`${base_url}login`, user);
        return res.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Sends a one-time password (OTP) to user's email
 * 
 * Makes a POST request to send OTP for verification
 * 
 * @param {string} email - Email address to send OTP to
 * @returns {Promise<Object>} Response confirming OTP sent
 * @throws {Error} If OTP sending fails
 * 
 * @example
 * try {
 *   await sendOtp("user@example.com");
 *   console.log("OTP sent successfully");
 * } catch (error) {
 *   console.error("Failed to send OTP:", error);
 * }
 */
export const sendOtp = async (email: any) => {
    try {
        const res = await axios.post(`${base_url}sendOtp/${email}`);
        return res.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Verifies the OTP entered by user
 * 
 * Makes a GET request to verify the OTP matches
 * 
 * @param {string} email - User's email address
 * @param {string} otp - One-time password to verify
 * @returns {Promise<Object>} Response confirming OTP verification
 * @throws {Error} If verification fails
 * 
 * @example
 * try {
 *   const verified = await verifyOtp("user@example.com", "123456");
 *   console.log("OTP verified:", verified);
 * } catch (error) {
 *   console.error("OTP verification failed:", error);
 * }
 */
export const verifyOtp = async (email: any, otp: any) => {
    try {
        const result = await axios.get(`${base_url}verifyOtp/${email}/${otp}`);
        return result.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Changes user's password
 * 
 * Makes a POST request to update password after verification
 * 
 * @param {string} email - User's email address
 * @param {string} password - New password to set
 * @returns {Promise<Object>} Response confirming password change
 * @throws {Error} If password change fails
 * 
 * @example
 * try {
 *   await changePassword("user@example.com", "newPassword123");
 *   console.log("Password changed successfully");
 * } catch (error) {
 *   console.error("Password change failed:", error);
 * }
 */
export const changePassword = async(email: any, password: any) => {
    try {
        const res = await axios.post(`${base_url}changePass`, {email, password})
        return res.data
    } catch(error) {
        throw error;
    }
}