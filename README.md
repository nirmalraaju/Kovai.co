# 🚀 Task Management App

A full-stack Task Management application built with **React (Vite)**, **Express.js**, and **Supabase**. Users can authenticate with Google, create tasks, view their personal task list, and update task status through a clean and intuitive interface.

---

## ✨ Features

- 🔐 Google Authentication with Supabase Auth
- ➕ Create new tasks
- 📋 View all tasks for the logged-in user
- 🔄 Update task status
- 🗂️ Task states:
  - Planned
  - In Progress
  - Completed
- ☁️ Secure backend API with Express.js
- 🛡️ Row Level Security (RLS) in Supabase

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- JavaScript (ES6+)
- CSS

### Backend
- Node.js
- Express.js
- Supabase JavaScript Client
- dotenv
- cors

### Database & Authentication
- Supabase PostgreSQL
- Supabase Auth (Google OAuth)

---

## 📁 Project Structure

```text
TASK-MANAGER/
│
├── backend/
│   ├── config/
│   │   └── supabaseClient.js
│   ├── controllers/
│   │   └── taskController.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js
│   │   ├── components/
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   └── Dashboard.jsx
│   │   ├── supabaseClient.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
🗄️ Database Setup (Supabase)

Run the following SQL in the Supabase SQL Editor.

create table tasks (
  id bigint generated always as identity primary key,
  title text not null,
  description text,
  status text not null default 'Planned',
  user_id uuid references auth.users not null default auth.uid(),
  created_at timestamp with time zone default now()
);

-- Enable Row Level Security
alter table tasks enable row level security;

-- Policy: Users can only access their own tasks
create policy "Users can only access their own tasks"
on tasks
for all
using (auth.uid() = user_id);
⚙️ Setup & Installation
Prerequisites
Node.js (v18 or higher)
A Supabase account
A Supabase project with Google Authentication enabled
1️⃣ Clone the Repository
git clone https://github.com/your-username/task-manager.git
cd task-manager
2️⃣ Backend Setup
cd backend
npm install
Create .env
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
PORT=5000
Start Backend Server
npm run dev

Server runs at:

http://localhost:5000
3️⃣ Frontend Setup
cd frontend
npm install
Create .env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_API_URL=http://localhost:5000/api
Start Frontend Development Server
npm run dev

Frontend runs at:

http://localhost:5173
🔌 API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Fetch all tasks for the user
POST	/api/tasks	Create a new task
PUT	/api/tasks/:id	Update task status
DELETE	/api/tasks/:id	Delete a task (optional)
📦 Sample API Payloads
Create Task
{
  "title": "Complete project documentation",
  "description": "Write a professional README",
  "status": "Planned"
}
Update Task Status
{
  "status": "Completed"
}
🔐 Authentication Flow
User signs in using Google.
Supabase authenticates the user.
Frontend receives the session.
Backend uses the authenticated user context.
Row Level Security ensures users can only access their own tasks.
🧪 Testing the API

Use tools such as:

Postman
Thunder Client
Insomnia

Recommended tests:

Create a task
Retrieve all tasks
Update task status
Verify user-specific access
🚀 Deployment
Frontend
Vercel
Netlify
Backend
Render
Railway
Database & Authentication
Supabase
📚 What This Project Demonstrates
Full-stack application architecture
REST API development
Authentication and authorization
CRUD operations
Environment variable management
Database security with RLS
Modern React development with Vite
📝 License

Distributed under the MIT License.
