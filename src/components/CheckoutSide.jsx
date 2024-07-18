// CheckoutSide.jsx

// Import necessary icons from react-icons library
import { LuBadgeCheck } from "react-icons/lu";
import { FaHashtag } from "react-icons/fa6";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";

// Define the CheckoutSide component
function CheckoutSide({ productsCart }) {
  // Calculate the total quantity of products in the cart
  const quantity = productsCart.reduce((total, item) => {
    return total + item.count;
  }, 0);

  // Calculate the total price of products in the cart
  const total = productsCart.reduce((total, item) => {
    return total + item.count * item.price;
  }, 0);

  return (
    // Main container with styling
    <div className="flex h-full flex-col items-start justify-between gap-y-5 px-5 py-5">
      {/* Information section */}
      <div className="info flex flex-col gap-y-3">
        {/* Total price display */}
        <div className="flex items-center justify-start gap-x-2">
          <LiaFileInvoiceDollarSolid className="text-xl text-primary" />
          <span className="text-primary">Total:</span>
          <span className="ml-2">{total.toFixed(2)} $</span>
        </div>
        {/* Total quantity display */}
        <div className="flex items-center justify-start gap-x-2">
          <FaHashtag className="text-xl text-primary" />
          <span className="text-primary">Quantity:</span>
          <span className="ml-2">{quantity}</span>
        </div>
        {/* Status display */}
        <div className="flex items-center justify-start gap-x-2">
          <LuBadgeCheck className="text-xl text-primary" />
          <span className="text-primary">Status:</span>
          <span className="ml-2">pending ...</span>
        </div>
      </div>
      {/* Checkout button */}
      <button className="flex w-full items-center justify-center rounded-lg bg-primary px-4 text-lg font-bold text-white">
        Checkout
      </button>
    </div>
  );
}

// Export the CheckoutSide component as the default export
export default CheckoutSide;
