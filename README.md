# Mentorship Backend API

This is a backend API for a mentorship platform where mentors and students can manage lessons and sessions.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- OpenAI API

## Features

- User Signup & Login
- Student Management
- Lesson Management
- Session Booking
- AI Lesson Summarization

## Installation

1. Clone the repository

git clone https://github.com/Yesh6599/mentorship-backend.git

2. Install dependencies

npm install

3. Create .env file

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mentorship
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_api_key

4. Run the server

node server.js

Server will start at:

http://localhost:5000

## API Endpoints

Auth
POST /api/auth/signup  
POST /api/auth/login  

Students
POST /api/students  
GET /api/students  

Lessons
POST /api/lessons  

Sessions
POST /api/sessions  
GET /api/lessons/:id/sessions  

AI Summary
POST /llm/summarize

Example Request:

{
"text": "Today we discussed algebra and variables..."
}
