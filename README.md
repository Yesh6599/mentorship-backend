# Mentorship Backend API

A backend API for a simplified mentorship platform where **Parents, Students, and Mentors** interact.

Includes:

- JWT Authentication
- Student management
- Lesson management
- Booking system
- AI lesson summarization API

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [LLM Summarization](#llm-summarization)
- [Assumptions & Notes](#assumptions--notes)

---

## Features

### 1. Authentication
- User signup
- User login
- Secure password hashing
- JWT token authentication

### 2. Student Management
Parents can create and manage student profiles.

### 3. Lesson Management
Mentors can create and manage lessons.

### 4. Booking System
Parents can book lessons for students.

### 5. AI Lesson Summarization
Uses an LLM API to generate short summaries of lesson content.

---

## Tech Stack

Backend technologies used in this project:

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcrypt password hashing
- AI API integration
- API testing using Postman

---

## Setup Instructions

### 1 Clone the Repository

```bash
git clone https://github.com/Yesh6599/mentorship-backend.git
```

### 2 Navigate to Project Folder

```bash
cd mentorship-backend
```

### 3 Install Dependencies

```bash
npm install
```

### 4 Create Environment Variables

Create a `.env` file in the root directory.

Example:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_ai_api_key
```

### 5 Start the Server

```bash
npm start
```

Server will run at:

```
http://localhost:5000
```

---

## Environment Variables

| Variable | Description |
|--------|-------------|
| PORT | Server port |
| MONGO_URI | MongoDB connection string |
| JWT_SECRET | Secret key for JWT authentication |
| OPENAI_API_KEY | API key for AI summarization |

---

## API Endpoints

Base URL

```
http://localhost:5000/api
```

---

### Authentication

#### Signup

POST `/api/auth/signup`

Example request:

```json
{
"name": "Yash",
"email": "yash@test.com",
"password": "123456"
}
```

Response:

```
User created successfully
```

---

#### Login

POST `/api/auth/login`

Example request:

```json
{
"email": "yash@test.com",
"password": "123456"
}
```

Response:

```json
{
"token": "JWT_TOKEN"
}
```

---

### Students API

#### Create Student

POST `/api/students`

```json
{
"name": "Student Name",
"age": 12
}
```

---

#### Get Students

GET `/api/students`

Returns all students belonging to the authenticated user.

---

### Lessons API

#### Create Lesson

POST `/api/lessons`

```json
{
"title": "Math Basics",
"description": "Introduction to Algebra"
}
```

---

#### Get Lessons

GET `/api/lessons`

Returns all available lessons.

---

### Booking API

#### Book Lesson

POST `/api/bookings`

```json
{
"studentId": "STUDENT_ID",
"lessonId": "LESSON_ID"
}
```

---

## LLM Summarization

### Endpoint

POST `/api/llm/summarize`

Example request:

```json
{
"text": "Long lesson content..."
}
```

Example response:

```json
{
"summary": "Short AI generated summary"
}
```

Rules:

- Minimum 50 characters
- Maximum 120 words
- Output 3–6 bullet points or a short paragraph

---

## Assumptions & Notes

- JWT is used for authentication.
- Passwords are hashed using bcrypt.
- Only authenticated users can access protected routes.
- AI summarization uses an external LLM API.

---

## Author

Yashasvi Shukla

---

## Repository

```
https://github.com/Yesh6599/mentorship-backend
```
