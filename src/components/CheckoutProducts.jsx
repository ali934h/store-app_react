// CheckoutProducts.jsx

// Import necessary hooks and components
import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { shortTitle } from "../../src/functions/common"; // Import a utility function for shortening titles
import { ProductsContext } from "../contexts/ProductsProviders"; // Import ProductsContext for state management

// Define the CheckoutProducts component
function CheckoutProducts({ item: { title, image, count, id } }) {
  const {
    query: { cart }, // Destructure cart from query within the ProductsContext
    dispatchQuery, // Destructure dispatchQuery function for dispatching actions
  } = useContext(ProductsContext);

  return (
    // Main container for the product in the checkout with styling
    <div className="flex items-center justify-between rounded-xl border border-dashed border-slate-500 bg-white px-5 py-3">
      {/* Container for the product image */}
      <div>
        <img className="h-16 w-16" src={image} alt={title} />
      </div>

      {/* Container for the product title */}
      <div className="font-bold">{shortTitle(title)}</div>

      {/* Container for the quantity controls */}
      <div className="flex items-center justify-center gap-x-2">
        {/* Button to decrease the product quantity */}
        <FaMinus
          onClick={() => dispatchQuery({ type: "decrease", payload: id })}
          className="cursor-pointer rounded-md bg-primary p-1 text-2xl text-white"
        />
        {/* Display the current count of the product */}
        {count}
        {/* Button to increase the product quantity */}
        <FaPlus
          onClick={() => dispatchQuery({ type: "increase", payload: id })}
          className="cursor-pointer rounded-md bg-primary p-1 text-2xl text-white"
        />
      </div>
    </div>
  );
}

// Export the CheckoutProducts component as the default export
export default CheckoutProducts;
