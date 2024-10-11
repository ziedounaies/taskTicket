# taskTicket

# Project Priority and Task Management Application

This is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). The application helps companies manage the priority of projects and tasks for users. It includes user authentication, dashboards for projects and tasks, search functionality, notifications, and profile management.

## Features

- **User Authentication**: Secure authentication with JWT tokens.
- **Dashboard**: Displays the user's projects and tasks, organized by priority.
- **Task Management**: Users can manage tasks with four priority levels.
- **Project Management**: Projects are assigned three priority levels.
- **Notifications**: Automatic notifications are sent when the priority of a project changes.
- **Search**: Users can search for other users, as well as their own projects and tasks.
- **Profile Management**: Users can view and edit their profiles.

## Technologies Used

### Front-End:
- **React.js**: For building the user interface.
- **Redux**: For state management.
- **React Router**: For handling navigation.
- **Axios**: For making HTTP requests to the API.

### Back-End:
- **Node.js**: For the server-side environment.
- **Express.js**: For building the RESTful API.
- **MongoDB**: For the database, using Mongoose as an ODM.
- **JWT (JSON Web Tokens)**: For user authentication and authorization.
  
## API Endpoints

### Authentication
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Login a user and get a JWT token.

### Projects
- `GET /api/projects`: Get all projects for the logged-in user.
- `POST /api/projects`: Create a new project.
- `PUT /api/projects/:id`: Update a project's priority.
- `DELETE /api/projects/:id`: Delete a project.

### Tasks
- `GET /api/tasks`: Get all tasks for the logged-in user.
- `POST /api/tasks`: Create a new task.
- `PUT /api/tasks/:id`: Update a task's priority or status.
- `DELETE /api/tasks/:id`: Delete a task.

### Users
- `GET /api/users`: Search for users.
- `GET /api/users/:id`: Get details for a specific user.
- `GET /api/profile`: Get the profile of the logged-in user.
- `PUT /api/profile`: Update the profile of the logged-in user.

### Notifications
- Notifications are sent via real-time updates when a project’s priority changes.

## Getting Started

To get a local copy of the project up and running, follow these simple steps:

### Prerequisites

Make sure you have the following installed:
- **Node.js**: [Download and install Node.js](https://nodejs.org/).
- **MongoDB**: [Download and install MongoDB](https://www.mongodb.com/).

### Installation

1. **Clone the repository:**

   Open your terminal and run the following command to clone the repository:
   ```bash
   git clone https://github.com/your-username/priority-management-app.git
2. **Navigate to the project directory:**

   After cloning the repository, navigate to the root directory of the project:
   ```bash
   cd priority-management-app
3. **Install server-side dependencies:**

   In the root directory of the project, install the required server dependencies by running:
   ```bash
   npm install
4. **Install client-side dependencies:**

   Navigate to the `client` directory to install the front-end dependencies:
   ```bash
   cd client
   npm install
5. **Set up environment variables:**

   In the root directory of the project, create a `.env` file and add the following environment variables:
   ```bash
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret

## Screenshots

### Dashboard View
![Download](./screenshot/download.png)








