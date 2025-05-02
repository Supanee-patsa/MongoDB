# MongoDB
# MongoDB CRUD API with Node.js and Mongoose

## 📌 Project Overview

This project is a basic CRUD (Create, Read, Update, Delete) API built with **Node.js**, **Express**, and **MongoDB** using the **Mongoose** library. It connects to a MongoDB database named `mynewdatabase` and interacts with a `users` collection.

## 🗂️ Data Structure

Each user document includes the following fields:
- `first_name`: (String) The user's first name
- `last_name`: (String) The user's last name
- `email`: (String) The user's email address

## 🚀 Features

- Create a new user (`POST /users`)
- Retrieve all users (`GET /users`)
- Update a user by ID (`PUT /users/:id`)
- Delete a user by ID (`DELETE /users/:id`)

## ⚙️ Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- Postman or Insomnia (for testing)

## 🔧 Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mongo-crud-app.git
   cd mongo-crud-app
