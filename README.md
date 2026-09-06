#  Basic User Authentication

A simple user authentication system built using **Node.js, Express, PostgreSQL, and EJS**.

This project implements basic **user registration and login functionality**, with user credentials stored in a PostgreSQL database.

## Features

- User registration
- User login
- Checks whether an email already exists
- Validates login credentials
- PostgreSQL database integration
- Server-side form handling
- EJS-based frontend pages
- Environment variables for database password
- Basic error handling

## Tech Stack

- **Node.js**
- **Express.js**
- **PostgreSQL**
- **EJS**
- **JavaScript**
- **HTML/CSS**
- **dotenv**
- **body-parser**

## 📂 Project Structure

```text
9.1+Auth/
│
├── css/
│   └── ...
│
├── partials/
│   └── ...
│
├── public/
│   └── css/
│       └── styles.css
│
├── views/
│   ├── partials/
│   ├── home.ejs
│   ├── login.ejs
│   ├── register.ejs
│   └── secrets.ejs
│
├── .env
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── queries.sql
