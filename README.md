# Store App React

A feature-rich e-commerce application built using React, Tailwind CSS, and Vite, providing a seamless shopping experience with product browsing, searching, and checkout functionalities.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)

## Features

- Product Listing: Browse a variety of products.
- Search Functionality: Search products by name.
- Category Filtering: Filter products by categories.
- Shopping Cart: Add and manage products in the shopping cart.
- Checkout Process: Review and finalize your order.
- Responsive UI: Utilizes Tailwind CSS and Flowbite for a responsive and modern user interface.

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following installed:

Node.js (v14.0.0 or higher)
npm (v6.0.0 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ali934h/store-app_react.git
cd store-app_react
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

This will start the Vite development server.

## Usage

- Open your browser and navigate to `http://localhost:30312` (or the port displayed in your terminal).
- Use the interface to browse, search, and purchase products.

## Project Structure

The project is organized as follows:

```perl
store-app_react/
│
├── src/
│   ├── assets/
│   │   ├── css/                    # Tailwind CSS input and output files
│   │   │   ├── inputTailwind.css
│   │   │   └── outputTailwind.css
│   │   ├── icons/                  # Icons used in the application
│   │       └── book-app-logo.svg
│   ├── components/                 # React components
│   │   ├── CheckoutProducts.jsx
│   │   ├── CheckoutSide.jsx
│   │   ├── Form.jsx
│   │   ├── Product.jsx
│   │   ├── Products.jsx
│   │   └── Sidebar.jsx
│   ├── contexts/                   # Context providers for state management
│   │   └── ProductsProviders.jsx
│   ├── functions/                  # Utility functions
│   │   └── common.js
│   ├── layouts/                    # Layout components
│   │   └── Layout.jsx
│   ├── pages/                      # Page components
│   │   ├── Checkout.jsx
│   │   ├── HomePage.jsx
│   │   ├── PageNotFound.jsx
│   │   └── ProductDetailPage.jsx
│   ├── services/                   # Service configurations
│   │   └── axiosConfig.js
│   ├── App.jsx                     # Main App component
│   └── main.jsx                    # Main entry point for the application
│
├── index.html                      # Main HTML file
├── package.json                    # Node.js package configuration
├── tailwind.config.js              # Tailwind CSS configuration
└── vite.config.js                  # Vite configuration
```

## Scripts

The following scripts are defined in package.json:

- `npm run dev`: Start the Vite development server.
- `npm run build`: Build the application for production.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint to analyze the code for potential errors.
- `npm run tailwind`: Compile Tailwind CSS in watch mode.

## Dependencies

- Core:
  - `react`: JavaScript library for building user interfaces.
  - `react-dom`: Entry point of the DOM-related rendering paths.
  - `react-router-dom`: Declarative routing for React.
  - `axios`: Promise-based HTTP client for making API requests.
- UI and Styling:
  - `@material-tailwind/react`: Tailwind CSS components for React.
  - `flowbite`: Tailwind CSS component library.
  - `react-icons`: Collection of popular icons for React.
  - `react-loader-spinner`: Collection of loaders and spinners for React.
- Development:
  - `@vitejs/plugin-react`: Vite plugin to handle React projects.
  - `eslint`: Linter for identifying and fixing code quality issues.
  - `prettier-plugin-tailwindcss`: Integrates Prettier with Tailwind CSS.
  - `tailwindcss`: Utility-first CSS framework.
  - `vite`: Modern front-end tooling.
