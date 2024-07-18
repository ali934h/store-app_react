// ProductsProviders.jsx

import { createContext, useEffect, useReducer, useState } from "react";
import api from "../services/axiosConfig";
import { useSearchParams } from "react-router-dom";

// Create a context for products
export const ProductsContext = createContext();

// Reducer function to manage query state
const reducerQuery = (state, action) => {
  const id = action.payload;
  const countTarget = state.cart[id] || 0;
  switch (action.type) {
    case "search":
      return { ...state, search: action.payload };
    case "category":
      return { ...state, category: action.payload };
    case "increase":
      return { ...state, cart: { ...state.cart, [id]: countTarget + 1 } };
    case "decrease": {
      const newCart = { ...state.cart, [id]: countTarget - 1 };
      countTarget - 1 ? null : delete newCart[id];
      return { ...state, cart: newCart };
    }
    default:
      return state; // Added a default case to handle unexpected action types
  }
};

// Provider component to wrap around children components
function ProductsProviders({ children }) {
  // Hook to manage URL search parameters
  const [searchParams, setSearchParams] = useSearchParams();

  // Initial query state from URL search parameters
  const initialQuery = {
    search: searchParams.get("search") || "",
    category: searchParams.get("category") || "all",
    cart: {},
  };

  // useReducer hook to manage the query state
  const [query, dispatchQuery] = useReducer(reducerQuery, initialQuery);

  // useState hooks to manage products, all products, categories, and products in cart
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productsCart, setProductsCart] = useState([]);

  // useEffect to fetch categories on component mount
  useEffect(() => {
    api("/products/categories").then((response) => {
      response.unshift("all");
      setCategories(response);
    });
  }, []);

  // useEffect to update productsCart whenever query.cart or allProducts changes
  useEffect(() => {
    const newProductsCart = Object.keys(query.cart).map((key) => {
      const targetCart = allProducts.find(
        (item) => parseInt(item.id) === parseInt(key),
      );
      targetCart.count = query.cart[key];
      return targetCart;
    });
    setProductsCart(newProductsCart);
  }, [query, allProducts]); // Added allProducts as a dependency

  // useEffect to fetch all products and filter based on search parameters
  useEffect(() => {
    api("/products").then((response) => {
      setAllProducts(response);
    });
    const categoryQuery = searchParams.get("category");
    const apiURL = !categoryQuery
      ? "/products"
      : `/products/category/${encodeURIComponent(categoryQuery)}`;
    api(apiURL).then((response) => {
      setProducts(() => {
        return response.filter((item) => {
          const search = searchParams.get("search");
          const searchQuery = search ? search.toLowerCase() : "";
          return item.title.toLowerCase().includes(searchQuery);
        });
      });
    });
  }, [searchParams]);

  // Provide context values to children components
  return (
    <ProductsContext.Provider
      value={{
        allProducts,
        productsCart,
        products,
        searchParams,
        setSearchParams,
        query,
        dispatchQuery,
        categories,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProviders;
