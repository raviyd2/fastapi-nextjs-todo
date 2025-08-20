# Todo & Student Management Application

A comprehensive CRUD application with both todo and student management features, built with FastAPI backend and Next.js frontend.

## 🚀 Features

### Backend (FastAPI)
- **Todo Management**: Full CRUD operations for todos
- **Student Management**: Full CRUD operations for students
- **PostgreSQL Database**: Robust data storage with SQLAlchemy ORM
- **RESTful API**: Clean and well-documented endpoints
- **CORS Support**: Configured for frontend integration

### Frontend (Next.js)
- **Modern UI**: Clean, responsive design with Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Todo Management**: Interactive todo list with CRUD operations
- **Student Management**: Interactive student list with CRUD operations
- **Responsive Design**: Works on all device sizes

## 🛠️ Setup Instructions

### Backend Setup

1. **Install Python dependencies**:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

2. **Set up PostgreSQL**:
   - Ensure PostgreSQL is running
   - Create a database named `tododb`
   - Update the database URL in `backend/database.py` if needed

3. **Run the backend**:
   ```bash
   cd backend
   uvicorn main:app --reload --host 0.0.0.0 --port 3001
   ```

### Frontend Setup

1. **Install dependencies**:
   ```bash
   cd frontend
   npm install
   ```

2. **Run the frontend**:
   ```bash
   cd frontend
   npm run dev
   ```

3. **Access the application**:
   - Backend API: http://localhost:8000
   - Frontend: http://localhost:3000

## 📋 API Endpoints

### Todo Endpoints
- `GET /todos` - List all todos
- `POST /todos` - Create a new todo
- `GET /todos/{id}` - Get a specific todo
- `PUT /todos/{id}` - Update a todo
- `DELETE /todos/{id}` - Delete a todo

## 📝 Usage

### Todo Management
- Add new todos with title and completion status
- Mark todos as complete/incomplete
- Edit and delete todos
- View all todos in a clean, responsive interface

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/raviyd2/fastapi-nextjs-todo.git
   cd fastapi-nextjs-todo
   ```

2. **Follow the setup instructions above**

3. **Enjoy your todo and student management system!**

## 🛠️ Technologies Used

### Backend
- **FastAPI**: Modern, fast web framework for building APIs
- **PostgreSQL**: Robust relational database
- **SQLAlchemy**: SQL toolkit and ORM
- **Pydantic**: Data validation and settings management

### Frontend
- **Next.js**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons

## 📞 Support

For any questions or issues, please open an issue on GitHub.
