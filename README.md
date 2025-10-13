# Paradise Nursery - E-Commerce Plant Shop 🌿

Welcome to Paradise Nursery, a modern and responsive e-commerce application built with React, Vite, and Redux. This project connects to a custom-built Node.js API to provide a dynamic catalog of plants, allowing users to manage a shopping cart in a clean, user-friendly interface.

**➡️ Primary Live Demo (Netlify):** [https://your-netlify-site-name.netlify.app/](https://your-netlify-site-name.netlify.app/)
**➡️ Secondary Live Demo (GitHub Pages):** [https://your-github-username.github.io/e-plantShopping/](https://your-github-username.github.io/e-plantShopping/)


---

## Project Overview

This project demonstrates a full-featured e-commerce flow, from fetching and displaying products from a custom backend API to advanced shopping cart management. The application is built with a modern tech stack and follows best practices for state management, asynchronous operations, and component-based architecture.



---

## Tech Stack

* **Frontend**: React 18, React Router v6
* **Backend**: Node.js, Express.js
* **State Management**: Redux Toolkit (`createSlice`, `createAsyncThunk`)
* **Build Tool**: Vite
* **Testing**: Jest & React Testing Library
* **Styling**: CSS with CSS Variables

---

## Local Setup and Installation

To run this project locally, you need to run **both** the backend API server and the frontend React application in separate terminals.

### 1. Backend Server Setup

First, get the API server running.

1.  **Navigate to the GitHub directory:**
    api-server GitHub link: https://github.com/oladipupo-david-gideon/e-plant-api.git

    ```bash
    cd ../api-server
    ```
2.  **Navigate to the API directory:**
    ```bash
    cd ../api-server
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Start the API server:**
    ```bash
    npm start
    ```
    The API will now be running at `http://localhost:4000`. Leave this terminal running.

### 2. Frontend App Setup

Now, in a **new terminal**, run the React application.

1.  **Navigate to the project directory:**
    ```bash
    cd ../e-plantShopping
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will now be available at `http://localhost:5173` and will be able to communicate with your local API server.

---

## Deployment

This project uses a dual-deployment strategy:

* **Backend (`api-server`)**: Deployed as a Web Service on **Render**.
* **Frontend (`e-plantShopping`)**: Deployed as a static site on **Netlify** and **GitHub Pages**.

The `VITE_API_BASE_URL` environment variable in the frontend project is used to point to the correct API URL (either `http://localhost:4000` for local development or the public Render URL for the live deployments).

---

## Available Scripts

* **`npm run dev`**: Runs the app in development mode.
* **`npm run build`**: Builds the app for a production deployment at the root (for Netlify).
* **`npm run test`**: Runs the test suite.
* **`npm run preview`**: Previews the production build for Netlify locally.
* **`npm run deploy`**: Deploys the production build to GitHub Pages.