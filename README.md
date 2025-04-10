# Full-Stack Todo Application

This is a full-stack Todo application developed as an internship assignment. The project uses Next.js (with the App Router) for the frontend and Express with MongoDB for the backend. It is styled using Tailwind CSS, includes a Markdown editor powered by `react-simplemde-editor`, and utilizes additional packages such as `react-icons` for icons.

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [Running the Project](#running-the-project)
- [How the Project Was Created](#how-the-project-was-created)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is a full-stack Todo application where users can:

- View a list of Todo cards on the left side.
- Use a Markdown editor on the right side (powered by `react-simplemde-editor`) to add or edit Todo details.
- Enjoy a responsive design courtesy of Tailwind CSS.
- Interact with a backend API built with Express and MongoDB to perform CRUD operations (create, read, update, and delete).

This application was built as part of an internship assignment to showcase modern web development practices with Next.js and Node/Express.

## Tech Stack

- **Frontend:**
  - [Next.js](https://nextjs.org/) (using the App Router)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [react-simplemde-editor](https://github.com/RIP21/react-simplemde-editor)
  - [EasyMDE](https://github.com/Ionaru/easy-markdown-editor)
  - [react-icons](https://react-icons.github.io/react-icons/)

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [MongoDB](https://www.mongodb.com/)
  - [Mongoose](https://mongoosejs.com/)
  - [CORS](https://www.npmjs.com/package/cors)
  - [dotenv](https://www.npmjs.com/package/dotenv)

- **Development Tools:**
  - [PostCSS](https://postcss.org/)
  - [Nodemon](https://nodemon.io/)

## Project Structure

The project is organized in a monorepo style with separate directories for the frontend and backend:

```
/TODO
├── app
│   ├── api
│   │   └── todos
│   │       ├── route.js         # Handles GET and POST requests for todos
│   │       └── [id]
│   │           └── route.js     # Handles GET, PUT, DELETE for a specific todo
│   ├── favicon.ico
│   ├── globals.css              # Global styles including Tailwind base config
│   ├── layout.js                # App layout wrapper
│   └── page.jsx                 # Home page rendering Todo list and editor
│
├── components
│   ├── AddBtn.jsx               # Floating Add button
│   ├── EditorPanel.jsx         # Markdown editor panel
│   ├── Navbar.jsx              # Top navigation bar
│   ├── RemoveBtn.jsx           # Button to delete a Todo
│   ├── SearchBtn.jsx           # Optional search button (can be extended)
│   └── TodoList.jsx            # Card layout for each Todo item
│
├── libs
│   └── mongodb.js              # MongoDB connection logic
│
├── models
│   └── todo.js                 # Mongoose schema for Todo documents
│
├── .env                        # Environment file for MongoDB URI
├── .gitignore                  # Files to ignore in version control
├── eslint.config.mjs          # Linting configuration
├── node_modules
└── package.json

```

## Installation and Setup

Follow these steps to clone and set up the project on your local machine:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- MongoDB (local installation or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Clone the Repository

```bash
# Clone the repository to your local machine
git clone https://github.com/Diveshnew/TODO.git
cd TODO
```

### Project Setup

1. Install the required packages:

    ```bash
    npm install
    ```

2. Install Tailwind CSS and PostCSS dependencies (if not already installed):

    ```bash
    npm install tailwindcss @tailwindcss/postcss postcss
    ```

3. Install additional frontend dependencies:

    ```bash
    npm install react-simplemde-editor easymde react-icons
    ```

4. Install backend dependencies:

    ```bash
    npm install express mongoose cors dotenv
    npm install --save-dev nodemon
    ```

5. Create a `.env` file at the root of you folder dir and add your MongoDB connection string:

    ```env
    MONGO_URI=your_mongodb_connection_string
    ```

6. Start the backend server (using nodemon for automatic reloading):

    ```bash
    npm run dev
    ```

## Running the Project

- **PROJECT:** Accessible at [http://localhost:3000](http://localhost:3000)
  
Ensure that your backend server is running so that the frontend can make API calls for creating, fetching, and updating todos.

## How the Project Was Created

1. **Project Initialization:**
   - I used `npx create-next-app@latest` to bootstrap the Next.js application.
   - Configured Tailwind CSS by installing it along with PostCSS dependencies.

2. **Frontend Development:**
   - Developed the UI using Next.js App Router. The layout features two main sections: a sidebar for Todo cards and a main section with a Markdown editor.
   - Implemented the Todo cards in a separate `TodoList` component with hover effects and responsive design.
   - Incorporated `react-simplemde-editor` for the Markdown editor on the right side to allow editing and formatted content.
   - Added `react-icons` for future icon needs (e.g., delete icons on the Todo card).

3. **Backend Development:**
   - Set up an Express server with a RESTful API.
   - Configured MongoDB using Mongoose with a simple Todo model.
   - Implemented CRUD operations within the controller and routed API endpoints.
   - Configured CORS and environment variables to secure sensitive data.

4. **Integration:**
   - Connected the frontend and backend by fetching data (such as Todo details) via the API.
   - Employed state management in Next.js to manage and update UI based on user interactions.

5. **Development Tools:**
   - Nodemon was installed for automatic backend server reloading.
   - Environment variables are used with the `dotenv` package to manage configuration securely.

## Contributing

If you wish to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/YourFeature`).
3. Commit your changes.
4. Push your branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is for academic and demonstration purposes. Feel free to modify it based on your requirements.
