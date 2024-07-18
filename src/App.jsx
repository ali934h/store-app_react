// App.jsx

// Import necessary components and libraries from react-router-dom for routing
import { Routes, Route, Navigate } from "react-router-dom";

// Import custom layout and page components
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import ProductsProviders from "./contexts/ProductsProviders";
import Checkout from "./pages/Checkout";
import ProductDetailPage from "./pages/ProductDetailPage";
import PageNotFound from "./pages/PageNotFound";

// Define the main App component
function App() {
  return (
    // Wrap the application with the ProductsProviders context for state management
    <ProductsProviders>
      {/* Wrap the application layout */}
      <Layout>
        {/* Define the application routes */}
        <Routes>
          {/* Route for the products page */}
          <Route path="/products" element={<HomePage />} />

          {/* Redirect the root path to the products page */}
          <Route path="/" element={<Navigate to="/products" replace />} />

          {/* Route for the checkout page */}
          <Route path="/checkout" element={<Checkout />} />

          {/* Route for handling 404 errors */}
          <Route path="/*" element={<PageNotFound />} />

          {/* Route for the product detail page with a dynamic id */}
          <Route path="/products/:id" element={<ProductDetailPage />} />
        </Routes>
      </Layout>
    </ProductsProviders>
  );
}

// Export the App component as the default export
export default App;
