# Paradise Nursery - E-Commerce Plant Shop

A responsive single-page shopping app for a fictional plant store, built with React, Vite, and Redux Toolkit. It loads its product catalog from a custom Node.js/Express API (separate repo) and lets users manage a shopping cart.

> **Status:** The live demos (Netlify and GitHub Pages) and the Render-hosted API have been taken down, so this repo is kept as a code sample. To see it running, follow the local setup below.

## About this project

This repo started as an IBM course starter project (forked from [ibm-developer-skills-network/e-plantShopping](https://github.com/ibm-developer-skills-network/e-plantShopping)). I reworked it with AI assistance into a full-stack app with a custom backend API, based on how I thought an online store should work and feel for users.

**How it was built:** I led the product and user-experience decisions and used AI coding assistance to write much of the code, then reviewed and tested the result.

## Features

* Catalog of 26 plants across 5 categories (air purifying, aromatic, insect repellent, medicinal, and low maintenance), loaded from a custom Node.js/Express API with `createAsyncThunk`, including loading and error states
* Product detail pages through a dynamic route (`/products/:productId`)
* Shopping cart managed with Redux Toolkit: add items (repeat adds increase the quantity), remove items, and update quantities
* Client-side routing with React Router v6 for the home, product list, product detail, and cart pages, so navigation doesn't reload the page
* Responsive layout

## Tech Stack

* **Frontend:** React 18, React Router v6
* **Backend:** Node.js, Express.js (separate repo: [e-plant-api](https://github.com/oladipupo-david-gideon/e-plant-api))
* **State management:** Redux Toolkit (`createSlice`, `createAsyncThunk`)
* **Build tool:** Vite
* **Testing:** Jest and React Testing Library (one component test, `AboutUs.test.jsx`)
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
```

Create a `.env` file in the project root containing the API address. This is required, because the app has no default API URL:

```
VITE_API_BASE_URL=http://localhost:4000
```

Then install and start the app:

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

## Known Limitations

* The frontend needs the API running to show any products. Without it, the product list fails to load.
* There is only one automated test, a component test for the About Us component.

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
