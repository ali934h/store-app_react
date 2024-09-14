import React from "react"; // Import the React library
import ReactDOM from "react-dom/client"; // Import the ReactDOM library for rendering the app
import App from "./App.jsx"; // Import the main App component
import "./assets/css/outputTailwind.css"; // Import Tailwind CSS for styling
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing

// Render the application to the DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Enable strict mode for highlighting potential issues */}
    <BrowserRouter>
      {/* Wrap the App component with BrowserRouter to enable routing */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
