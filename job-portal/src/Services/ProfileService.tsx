import axios from "axios";

/**
 * Base URL for profile-related API endpoints
 */
const base_url = "http://localhost:8080/api/v1/profiles/"

/**
 * Retrieves a user profile by ID from the backend
 * 
 * Makes a GET request to fetch profile data for a specific user
 * 
 * @param {number} id - User ID whose profile to retrieve
 * @returns {Promise<Object>} Response data containing profile information
 * @throws {Error} If profile retrieval fails
 * 
 * Expected response shape:
 * {
 *   id: number,
 *   name: string,
 *   role: string,
 *   skills: string[],
 *   experience: string,
 *   education: string,
 *   // Other profile fields...
 * }
 * 
 * @example
 * try {
 *   const profile = await getProfile(123);
 *   // Use profile data
 * } catch (error) {
 *   console.error("Failed to get profile:", error);
 * }
 */
export const getProfile = async (id: number) => {
    try {
        const res = await axios.get(`${base_url}get/${id}`);
        return res.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Updates a user's profile information
 * 
 * Makes a PUT request to update profile data in the backend
 * 
 * @param {Object} profile - Profile data to update
 * @param {number} profile.id - User ID whose profile to update
 * @param {string} [profile.name] - Updated name
 * @param {string} [profile.role] - Updated role
 * @param {string[]} [profile.skills] - Updated skills array
 * @param {string} [profile.experience] - Updated experience
 * @param {string} [profile.education] - Updated education
 * @returns {Promise<Object>} Response data containing updated profile
 * @throws {Error} If profile update fails
 * 
 * @example
 * try {
 *   const updatedProfile = await updateProfile({
 *     id: 123,
 *     name: "John Doe",
 *     role: "Senior Developer",
 *     skills: ["React", "TypeScript"]
 *   });
 * } catch (error) {
 *   console.error("Failed to update profile:", error);
 * }
 */
export const updateProfile = async (profile: any) => {
    try {
        const res = await axios.put(`${base_url}update`, profile);
        return res.data;
    } catch (error) {
        throw error;
    }
};