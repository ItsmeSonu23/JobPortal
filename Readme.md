# Job Portal

## Overview
This project is a Job Portal application that allows users to search for job listings, apply for jobs, and manage their profiles. The application is built using React and leverages various modern technologies and libraries to enhance user experience and functionality.
- **Clover-JobPortal** : [Clover](https://job-portal-cfrg.onrender.com/)
  
## Features
- **User Authentication**: Secure login and registration for users.
- **Job Listings**: Browse and search through a variety of job postings.
- **Application Management**: Users can apply for jobs and track their application status.
- **Profile Management**: Users can create and update their profiles with relevant information.
- **Notifications**: Real-time notifications for job application updates and alerts.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Redux**: State management library for managing application state.
- **Mantine**: A React component library that provides a set of customizable components and styles.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **TypeScript**: A superset of JavaScript that adds static types, enhancing code quality and maintainability.
- **Java**: A programming language used for backend development.
- **Spring Boot**: A framework for building Java-based applications, simplifying the setup and development of new services.
- **Spring Security**: A powerful and customizable authentication and access-control framework for Java applications.
- **JWT Authentication**: A method for securely transmitting information between parties as a JSON object, commonly used for authentication.
- **MongoDB**: A NoSQL database used for storing application data in a flexible, JSON-like format.

## Components
- **App**: The main application component that sets up providers and routing.
- **AppRoutes**: Handles the routing of the application.
- **Notifications**: Displays notifications to users at the top center of the application.

## Installation
To get started with the project, clone the repository and install the dependencies:
To install the project, follow these steps:

1. **Clone the Repository**: 
   Use the following command to clone the repository to your local machine:
   ```
   git clone https://github.com/yourusername/job-portal.git
   ```

2. **Navigate to the Project Directory**: 
   Change into the project directory:
   ```
   cd job-portal
   ```

3. **Install Dependencies**: 
   Run the following command to install all necessary dependencies:
   ```
   npm install
   ```

4. **Run the Application**: 
   Start the development server with:
   ```
   npm start
   ```
   This will launch the application in your default web browser.

## Functionalities
- **User Authentication**: 
  The application uses JWT (JSON Web Tokens) for secure authentication. Users can register and log in, with their credentials being validated against a backend API.

- **Job Listings**: 
  Users can view a list of job postings fetched from a RESTful API. The application supports searching and filtering job listings based on various criteria such as job title, location, and company.

- **Application Management**: 
  Users can apply for jobs directly through the application. The application sends the user's application data to the backend API, which processes and stores the application status.

- **Profile Management**: 
  Users can create and update their profiles, which includes personal information, work experience, and skills. This data is managed through a dedicated API that allows users to retrieve and update their profile information.

- **Notifications**: 
  The application integrates a notifications system that provides real-time updates to users regarding their job applications. Notifications are managed through a centralized API that pushes updates to the client.

## APIs Used
- **Authentication API**: 
  Handles user registration, login, and token management.

- **Job Listings API**: 
  Provides endpoints to fetch job listings, search for jobs, and filter results.

- **Application API**: 
  Manages job applications, allowing users to submit applications and check their status.

- **User Profile API**: 
  Allows users to create, read, update, and delete their profile information.

- **Notifications API**: 
  Sends real-time notifications to users regarding their application status and other relevant updates.

By following these instructions, you will be able to set up and run the Job Portal application successfully.
For the frontend part of the application, you can access it at the following link: [Job Portal Frontend](https://job-portal-cfrg.onrender.com/)
- **Backend API**: 
  The backend for the application is hosted at the following URL: [Clover Backend](https://cloverbackend-yknh.onrender.com). This API handles all server-side logic, including user authentication, job listings management, application processing, and user profile management. 

  Ensure that your frontend application is configured to communicate with this backend API for seamless functionality.
