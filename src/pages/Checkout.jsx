// Checkout.jsx

// Import necessary hooks and components
import { useContext } from "react";
import CheckoutProducts from "../components/CheckoutProducts";
import { ProductsContext } from "../contexts/ProductsProviders";
import CheckoutSide from "../components/CheckoutSide";

// Define the Checkout component
function Checkout() {
  // Retrieve productsCart from the ProductsContext using useContext hook
  const { productsCart } = useContext(ProductsContext);

  return (
    // Main container with responsive layout
    <div className="flex w-full flex-col flex-nowrap justify-between gap-x-10 gap-y-10 sm:flex-row ">
      {/* Container for the CheckoutSide component */}
      <div className="checkoutSide h-56 w-full rounded-2xl border border-dashed border-primary sm:w-4/12 md:w-3/12">
        <CheckoutSide productsCart={productsCart} />
      </div>

      {/* Container for the list of CheckoutProducts components */}
      <div className="checkoutBody flex w-full flex-col gap-y-5 sm:w-8/12 md:w-9/12">
        {/* Map over productsCart and render a CheckoutProducts component for each item */}
        {productsCart.map((item) => {
          return <CheckoutProducts key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

// Export the Checkout component as the default export
export default Checkout;
