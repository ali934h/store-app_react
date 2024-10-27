// Layout.jsx

import { FaShoppingBasket } from "react-icons/fa";
import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsProviders";
import { Link } from "react-router-dom";

function Layout({ children }) {
  // Destructure query from ProductsContext
  const { query } = useContext(ProductsContext);

  // Calculate total items in the cart
  const totalCart = Object.values(query.cart).reduce((total, item) => {
    return total + item;
  }, 0);

  return (
    <div className="virtualBody font-BricolageGrotesque flex h-full min-h-screen w-full flex-col items-center bg-slate-200 px-2 md:px-4 lg:px-5">
      <div className="flex min-h-screen w-full flex-col items-center gap-y-7 py-2 lg:w-11/12">
        <header className="flex w-full items-center justify-between gap-x-2 rounded-md bg-primary px-6 py-2 text-lg font-bold text-white">
          {/* Link to the store app home */}
          <Link to="/products">Store App</Link>
          <div className="relative mr-auto">
            {/* Display total cart items if there are any */}
            {!!totalCart && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black p-2 text-center text-xs">
                {totalCart}
              </span>
            )}
            {/* Link to the checkout page */}
            <Link to="/checkout">
              <FaShoppingBasket className="flex cursor-pointer items-center justify-center rounded-lg bg-white px-1 text-center text-3xl text-black" />
            </Link>
          </div>
          {/* External link to the developer's website */}
          <a target="_blank" href="https://alihosseini.dev" rel="noreferrer">
            alihosseini.dev
          </a>
        </header>
        {/* Render children components */}
        {children}
        <footer className="mt-auto flex w-full items-center justify-center gap-x-1 rounded-md bg-primary py-2 text-center text-xs font-medium text-white">
          <span>
            © 2024 Ali Hosseini. All rights reserved. Designed and developed by
            Ali Hosseini.
          </span>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
