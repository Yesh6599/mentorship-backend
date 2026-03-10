# Mentorship Backend API

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express](https://img.shields.io/badge/Express.js-Framework-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![JWT](https://img.shields.io/badge/Auth-JWT-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

Backend API for a **Mentorship Platform** where **Parents, Students, and Mentors** can manage lessons and bookings.

The system also integrates an **AI endpoint to summarize lesson content using an LLM**.

---

# Table of Contents

- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [LLM Summarization](#llm-summarization)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

# Project Overview

This backend service powers a mentorship platform that enables:

- User authentication
- Student management
- Lesson management
- Booking lessons
- AI-based lesson summarization

---

# Architecture

```
Client (Postman / Frontend)
        │
        ▼
   Express.js API
        │
        ▼
 Authentication (JWT)
        │
        ▼
 Controllers
        │
        ▼
   MongoDB Database
        │
        ▼
   LLM API (AI Summary)
```

---

# Features

### Authentication
- User Signup
- User Login
- Password hashing using bcrypt
- JWT token authentication

### Student Management
Parents can create and manage student profiles.

### Lesson Management
Mentors can create lessons.

### Booking System
Parents can book lessons for their students.

### AI Lesson Summarization
Uses an LLM API to summarize long lesson content.

---

# Tech Stack

| Technology | Purpose |
|-----------|--------|
| Node.js | Backend runtime |
| Express.js | Web framework |
| MongoDB | Database |
| JWT | Authentication |
| bcrypt | Password hashing |
| LLM API | AI summarization |
| Postman | API testing |

---

# Project Structure

```
mentorship-backend
│
├── controllers
│   ├── authController.js
│   ├── studentController.js
│   ├── lessonController.js
│
├── models
│   ├── User.js
│   ├── Student.js
│   ├── Lesson.js
│
├── routes
│   ├── authRoutes.js
│   ├── studentRoutes.js
│   ├── lessonRoutes.js
│
├── middleware
│   └── authMiddleware.js
│
├── server.js
├── package.json
└── README.md
```

---

# Setup Instructions

### 1 Clone the Repository

```bash
git clone https://github.com/Yesh6599/mentorship-backend.git
```

### 2 Navigate to the Project Folder

```bash
cd mentorship-backend
```

### 3 Install Dependencies

```bash
npm install
```

### 4 Create Environment Variables

Create `.env`

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_ai_api_key
```

### 5 Start Server

```
npm start
```

Server runs at:

```
http://localhost:5000
```

---

# Environment Variables

| Variable | Description |
|--------|-------------|
| PORT | Server port |
| MONGO_URI | MongoDB connection string |
| JWT_SECRET | Secret key for JWT |
| OPENAI_API_KEY | API key for AI summarization |

---

# API Documentation

Base URL

```
http://localhost:5000/api
```

---

## Authentication APIs

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | /auth/signup | Create new user |
| POST | /auth/login | Login user |

Example Signup

```json
{
"name": "Yash",
"email": "yash@test.com",
"password": "123456"
}
```

---

## Student APIs

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | /students | Create student |
| GET | /students | Get all students |

---

## Lesson APIs

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | /lessons | Create lesson |
| GET | /lessons | Get lessons |

---

## Booking APIs

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | /bookings | Book lesson |

Example:

```json
{
"studentId": "STUDENT_ID",
"lessonId": "LESSON_ID"
}
```

---

# LLM Summarization

Endpoint

```
POST /api/llm/summarize
```

Example request

```json
{
"text": "Long lesson content..."
}
```

Example response

```json
{
"summary": "AI generated summary"
}
```

Rules:

- Minimum **50 characters**
- Maximum **120 words**
- Output **3–6 bullet points or paragraph**

---

# Future Improvements

- Role based access control
- Payment integration
- Lesson ratings
- AI recommendation system
- Frontend dashboard

---

# Author

**Yashasvi Shukla**

Backend Developer Candidate

---

# Repository

```
https://github.com/Yesh6599/mentorship-backend
```
