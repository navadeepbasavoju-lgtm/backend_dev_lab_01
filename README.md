# Backend Development Fundamentals Labs

**Student Name:** B. Navadeep  
**Registration Number:** 252U1R9017  
**Section:** CSE-GEN-AI 2A 304  
**Course:** Backend Development Fundamentals  

---

## Repository Structure

This repository contains backend development lab assignments organized into separate directories:

- [**Lab 1 (`lab1/`)**](./lab1): Node.js and Express Server (routes, status codes, error handling)
- [**Lab 2 (`lab2/`)**](./lab2): SQLite database and CRUD routes (Express + SQLite)
- [**Lab 3 (`lab3/`)**](./lab3): REST API, query parameters, validation, debugging (Express + SQLite)

---

## Overview

### [Lab 1: Node.js and Express Server](./lab1)
- Built-in `http` module server and Express server with multiple routes (`/`, `/about`, `/time`).
- Proper HTTP status codes and custom 404 handler for unmatched routes.
- Hosted live on Render.

### [Lab 2: SQLite Database & CRUD Routes](./lab2)
- Express server connected to SQLite database (`books.db`).
- Full CRUD API endpoints (`GET /books/`, `GET /books/:bookId/`, `POST /books/`, `PUT /books/:bookId/`, `DELETE /books/:bookId/`).
- Parameterized SQL queries to prevent SQL injection and input validation.

### [Lab 3: REST API, Query Parameters, Validation & Debugging](./lab3)
- REST API with query parameters for search (`search_q`), price filtering (`min_price`, `max_price`), sorting (`order_by`, `order`), and pagination (`limit`, `offset`).
- Strict input validation for query parameters, route parameters, and request body with standard JSON error responses.
- Comprehensive Postman test collection with success and failure scenarios.
- Debugging exercises documented in `debugging/DEBUGGING.md`.
