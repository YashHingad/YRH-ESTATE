

# YRH Estate

YRH Estate is a full-featured Real Estate web application built using the MERN stack, designed to offer a modern and seamless experience for property listings, searches, and user authentication.

## Features

- **Property Listings:** Users can browse through a comprehensive list of properties with detailed information.
- **Search Functionalities:** Enhanced search capabilities allow users to find properties based on specific criteria.
- **Google Authentication:** Secure and convenient user authentication via Google.

## Tech Stack

- **MongoDB:** Efficient data management with a flexible schema.
- **Express.js:** A robust backend framework for handling API requests.
- **Node.js:** Server-side environment for scalable application logic.
- **React:** A dynamic, user-friendly interface for seamless interaction.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yrh-estate.git
   ```
2. Navigate to the project directory:
   ```bash
   cd yrh-estate
   ```
3. Install dependencies for both the server and client:
   ```bash
   npm install
   cd client
   npm install
   cd ..
   ```
4. Create a `.env` file in the root directory and add the necessary environment variables (e.g., MongoDB URI, Google OAuth credentials).

5. Start the development server:
   ```bash
   npm run dev
   ```

### Usage

Once the server is running, open your browser and go to `http://localhost:3000` to view the application.

## Project Structure

- `/client` - Contains the React frontend.
- `/server` - Contains the Express.js backend and API routes.
- `/models` - Mongoose models for MongoDB.
- `/routes` - API routes for property listings, user authentication, etc.

## Contributing

Feel free to submit issues or pull requests for improvements. Contributions are always welcome!
