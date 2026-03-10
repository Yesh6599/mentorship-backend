Mentorship Backend API

This project is a backend API for a mentorship platform where:

Parents can create student accounts

Mentors can create lessons

Parents can book lessons for students

The system also includes an AI endpoint to summarize lesson content

This project demonstrates backend development skills including authentication, API design, database management, and AI integration.

Tech Stack

Node.js

Express.js

MongoDB

JWT Authentication

bcrypt (password hashing)

LLM API (Gemini / OpenAI)

API testing using Postman

Features

User Signup & Login

JWT Authentication

Student Management

Lesson Management

Lesson Booking System

AI Lesson Content Summarization

Project Structure
mentorship-backend
│
├── controllers
├── middleware
├── models
├── routes
│
├── server.js
├── package.json
├── package-lock.json
├── .env
├── .gitignore
└── README.md
Installation & Setup
1 Clone the Repository
git clone https://github.com/Yesh6599/mentorship-backend.git
2 Navigate to the Project Folder
cd mentorship-backend
3 Install Dependencies
npm install
4 Create Environment Variables

Create a .env file in the root folder and add the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_llm_api_key
5 Start the Server
npm start

The server will run at:

http://localhost:5000
Environment Variables

The project requires the following environment variables:

Variable	Description
PORT	Server port
MONGO_URI	MongoDB connection string
JWT_SECRET	Secret key for JWT authentication
OPENAI_API_KEY	API key for AI summarization
API Documentation

Base URL

http://localhost:5000/api
Authentication APIs
Signup

POST /auth/signup

Request Body

{
"name": "John",
"email": "john@test.com",
"password": "123456",
"role": "parent"
}

Response

User created successfully
Login

POST /auth/login

Request Body

{
"email": "john@test.com",
"password": "123456"
}

Response

{
"token": "JWT_TOKEN"
}
Student APIs
Create Student

POST /students

Example Body

{
"name": "Student Name",
"age": 12
}
Get Students

GET /students

Returns all students belonging to the authenticated parent.

Lesson APIs
Create Lesson

POST /lessons

Example Body

{
"title": "Math Basics",
"description": "Introduction to algebra"
}
Booking APIs
Book Lesson

POST /bookings

Example Body

{
"studentId": "STUDENT_ID",
"lessonId": "LESSON_ID"
}
AI Lesson Summarization API
Summarize Lesson Content

POST /llm/summarize

Example Request

{
"text": "Long lesson content..."
}

Example Response

{
"summary": "Short AI generated summary"
}

Rules:

Text must be at least 50 characters

The summary returns 3–6 bullet points or a short paragraph under 120 words

Testing the API

All APIs can be tested using Postman.

Example request:

POST http://localhost:5000/api/auth/signup
Security Features

Password hashing using bcrypt

JWT authentication

Protected routes

Environment variables for sensitive data

Author

Yash Shukla
Backend Developer Candidate

Repository

GitHub Repository

https://github.com/Yesh6599/mentorship-backend
