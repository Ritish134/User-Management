# User Management using NodeJs

A robust application with user authentication, role-based access control, and secure API endpoints using jwt for authentication, and bcrypt for secure password storage.

## Table of Contents

### User Management
  #### 👉 Signup
 Collect basic details (email, phone number, name, profile image, password) during the signup process. Ensure at least     one of the phone numbers or email is provided during signup. Implement encryption for passwords using bycrpt library.
 
![signup-1](https://github.com/Ritish134/User-Management/assets/121374890/37ff093e-8659-49f1-99fa-2700a8f83c50)

![signup-2](https://github.com/Ritish134/User-Management/assets/121374890/e7df741c-4e7b-4cea-8e5e-0111509fec3e)

#### 👉 Login
 Allow users to log in using email/phone and password.<br>
 Using JSON web token to generate a unique token for the user

 ![login-1](https://github.com/Ritish134/User-Management/assets/121374890/b58e509d-d4e3-4ed1-b2a9-75446f8e39ae)

 #### 👉 Get User by ID
  Users can view their details using userId
  
  ![getUserById](https://github.com/Ritish134/User-Management/assets/121374890/96d91f92-2ae3-48da-baeb-c1534b00cb17)

 ### 👉 Modify User Details
 Users can only modify their own name and profile image. Phone number and email, once entered, cannot be changed.

![updateUser](https://github.com/Ritish134/User-Management/assets/121374890/13a5009b-8857-42bc-9194-194707cfda20)

![updateUser-1](https://github.com/Ritish134/User-Management/assets/121374890/9f409d8f-e5f8-4f41-8d65-4b35a9683a3c)

### 👉 Delete User

Users can delete their accounts.

![deleteUser](https://github.com/Ritish134/User-Management/assets/121374890/9e19528c-0359-418c-a95f-87225ed9db1b)

## Roles and Access Control

### Roles

 There are two roles defined Admin and User.

 ### 👉 Admin Access

Admins can view, modify, and delete all user details.

![Admin-getAllUser](https://github.com/Ritish134/User-Management/assets/121374890/003dec6e-8164-4c47-809f-3993a968a64a)
![Admin-updateUser](https://github.com/Ritish134/User-Management/assets/121374890/065405c6-4379-466f-bc0b-16586c0f292f)
![Admin-deleteUser](https://github.com/Ritish134/User-Management/assets/121374890/7cfc0ee2-c15f-4d58-b0cd-514cd43c09dc)

### 👉 User Access

Users can only view, modify, and delete their details.

## Admin Management

### Create Admin

To create admin accounts.

![createAdmin](https://github.com/Ritish134/User-Management/assets/121374890/a88cb57b-81e0-44c6-abf3-e818d96bf521)
![createAdmin-1](https://github.com/Ritish134/User-Management/assets/121374890/0780cfe2-7d8a-4235-9662-33862f587746)

## Authentication and Security

### Authentication

Implemented an authentication system using JSON Web Tokens (JWT).

### Password Encryption

Used bcrypt to securely encrypt user passwords.

## Image Storage

### Profile Image

Saves the profile images in the local system.

![uploadImage](https://github.com/Ritish134/User-Management/assets/121374890/f951bdc5-564a-472c-a51a-ca9b6d5c47d9)
![uploadImage-1](https://github.com/Ritish134/User-Management/assets/121374890/7dba31da-58a4-442b-9e0b-14bd03a17bfb)
![getUserImage](https://github.com/Ritish134/User-Management/assets/121374890/7e7f0e82-74d3-4ded-9a7f-02dfde5b2320)


## Database and Framework

### Framework

Used Express.js for API development.

### Database

Used MongoDB for the database.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Ritish134/User-Management.git
   
2. Install dependencies:
   ```bash
   cd your-project
   npm install

3. Set up environment variables: <br>
  Create a .env file and add the configuration variables `MONGO_URI`, `JWT_SECRET`

4. Run the application:
   ```bash
   node index
