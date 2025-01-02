# Express.js: Unhandled Exceptions and Missing Input Validation

This repository demonstrates a common issue in Express.js applications: unhandled exceptions and missing input validation.  Improper error handling and missing input validation can lead to application crashes and security vulnerabilities. The `bug.js` file showcases these issues, while `bugSolution.js` provides a corrected version.

## Bug

The `/users` POST route lacks validation of user data before attempting to create a new user. This leaves the application vulnerable to invalid input and unexpected errors during database operations.  Additionally, the `/users/:id` GET route lacks error handling in case the user with the given ID is not found.

## Solution

The `bugSolution.js` file demonstrates how to properly validate user data and implement comprehensive error handling for both the POST and GET routes, ensuring resilience and predictable behavior.