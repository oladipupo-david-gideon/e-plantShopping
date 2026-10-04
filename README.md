# Paradise Nursery - E-Commerce Plant Shop

A responsive single-page shopping app for a fictional plant store, built with React, Vite, and Redux Toolkit. It loads its product catalog from a custom Node.js/Express API (separate repo) and lets users manage a shopping cart.

> **Status:** The live demos (Netlify and GitHub Pages) and the Render-hosted API have been taken down, so this repo is kept as a code sample. To see it running, follow the local setup below.

## About this project

This repo started as an IBM course starter project (forked from [ibm-developer-skills-network/e-plantShopping](https://github.com/ibm-developer-skills-network/e-plantShopping)). I reworked it with AI assistance into a full-stack app with a custom backend API, based on how I thought an online store should work and feel for users.

**How it was built:** I led the product and user-experience decisions and used AI coding assistance to write much of the code, then reviewed and tested the result.

## Features

* Product catalog loaded from a custom Node.js/Express API
* Shopping cart managed with Redux Toolkit
* Client-side routing with React Router v6, so navigation doesn't reload the page
* Responsive layout

## Tech Stack

* **Frontend:** React 18, React Router v6
* **Backend:** Node.js, Express.js (separate repo: [e-plant-api](https://github.com/oladipupo-david-gideon/e-plant-api))
* **State management:** Redux Toolkit (`createSlice`, `createAsyncThunk`)
* **Build tool:** Vite
* **Testing:** Jest and React Testing Library
* **Styling:** CSS with CSS variables

## Run Locally

You need [Node.js](https://nodejs.org/) (LTS version). Run the API and the frontend in two separate terminals.

### 1. Start the API

```bash
git clone https://github.com/oladipupo-david-gideon/e-plant-api.git
cd e-plant-api
npm install
npm start
```

The API runs at `http://localhost:4000`. Leave this terminal open.

### 2. Start the frontend

In a new terminal:

```bash
git clone https://github.com/oladipupo-david-gideon/e-plantShopping.git
cd e-plantShopping
npm install
npm run dev
```

The app runs at `http://localhost:5173`. If it can't reach the API, create a `.env` file in the project root containing:

```
VITE_API_BASE_URL=http://localhost:4000
```

## Available Scripts

* `npm run dev` - run the app in development mode
* `npm run build` - build for production
* `npm run preview` - preview the production build locally
* `npm run test` - run the test suite
* `npm run deploy` - deploy the production build to GitHub Pages (the GitHub Pages demo has been retired)

## Deployment History

The frontend was previously hosted on Netlify and GitHub Pages, and the API on Render. All three have been taken offline. The frontend used the `VITE_API_BASE_URL` environment variable to point to the API.

## Credits

Based on an IBM course starter project, [ibm-developer-skills-network/e-plantShopping](https://github.com/ibm-developer-skills-network/e-plantShopping).
