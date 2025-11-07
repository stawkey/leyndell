# Leyndell - Fullstack E-commerce Shop

This application was developed as part of the "Introduction to Web Applications" course during the third semester of the Computer Science major at AGH University of Science and Technology in Kraków.

**Authors:**
- [stawkey](https://github.com/stawkey)
- [Mekost](https://github.com/Mekost)

## Overview

This project is a functional e-commerce platform. It allows users to browse products, register and log in, view their order history, and more.

<p align="center">
  <img src="https://github.com/user-attachments/assets/dece5c6f-e7f4-49bb-8c49-2b014a0dae96" width="30%" />
  <img src="https://github.com/user-attachments/assets/104ef1bb-8679-4344-8f9d-5b4d06b76ee8" width="30%" />
  <img src="https://github.com/user-attachments/assets/2e9102a8-d4bc-43a3-998c-0609e52f079e" width="30%" />
</p>

## Tech Stack

*   Node.js with Express.js
*   MongoDB with Mongoose for database management
*   React with Vite
*   `axios` for making HTTP requests
*   `@fontawesome` for icons

## Getting Started

To run the project do the following steps:

### Option 1: Using Docker

If you have Docker installed, you can build and run the application using:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/stawkey/leyndell.git
    cd leyndell
    ```

2.  **Build and run with Docker Compose:**
    ```bash
    docker-compose up --build -d
    ```

### Option 2: Manual installation & setup for development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/stawkey/ecommerce.git
    cd ecommerce
    ```

2.  **Backend Setup:**
    ```bash
    cd backend
    npm install
    ```
    Create a `.env` file in the `backend` directory and configure your environment variables.
    ```env
    PORT=your_backend_port
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```
    Start the backend server:
    ```bash
    node server.js
    ```

3.  **Frontend Setup:**
    ```bash
    cd ../frontend
    npm install
    ```
    Start the frontend development server:
    ```bash
    npm run dev
    ```

Once both frontend and backend servers are running, you should be able to access the website in your browser at `http://localhost:5173`.
