// Product.jsx

// Import necessary hooks and components
import { useContext } from "react";
import { TbShoppingBagPlus } from "react-icons/tb"; // Import shopping bag plus icon
import { TbListDetails } from "react-icons/tb"; // Import list details icon
import { FaPlus } from "react-icons/fa"; // Import plus icon
import { FaMinus } from "react-icons/fa"; // Import minus icon
import { FaRegTrashAlt } from "react-icons/fa"; // Import trash icon
import { ProductsContext } from "../contexts/ProductsProviders"; // Import ProductsContext for state management
import { shortTitle } from "../functions/common"; // Import a utility function for shortening titles
import { useNavigate } from "react-router-dom"; // Import hook for navigation

// Define the Product component
function Product({ title, id, price, image }) {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const {
    query: { cart }, // Destructure cart from query within the ProductsContext
    dispatchQuery, // Destructure dispatchQuery function for dispatching actions
  } = useContext(ProductsContext);

  return (
    // Main container for the product with styling
    <div className="flex select-none flex-col items-start justify-between gap-y-5 rounded-2xl border border-dashed border-slate-600 bg-white px-4 py-5 font-semibold lg:px-5">
      {/* Product image */}
      <img className="h-40 w-40 self-center" src={image} alt={title} />

      {/* Product title */}
      <div className="font-bold text-primary">{shortTitle(title)}</div>

      {/* Product price */}
      <div>{price}$</div>

      {/* Actions container */}
      <div className="flex w-full items-center justify-between">
        {/* More details button */}
        <button
          type="button"
          className="group relative w-fit"
          data-tooltip-target="tooltip-default"
          onClick={() => navigate(`/products/${id}`)}
        >
          <TbListDetails className="cursor-pointer text-2xl text-primary" />
          <div
            id="tooltip-default"
            role="tooltip"
            className="invisible absolute bottom-full left-14 z-10 mb-2 inline-block w-32 -translate-x-1/2 rounded-lg bg-black px-2 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 group-hover:visible group-hover:opacity-100"
          >
            More Details
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </button>

        {/* Add to cart button if the product is not in the cart */}
        {!cart[id] && (
          <TbShoppingBagPlus
            className="cursor-pointer rounded-md bg-primary p-[2px] text-2xl text-white"
            onClick={() => dispatchQuery({ type: "increase", payload: id })}
          />
        )}

        {/* Quantity control if the product is in the cart */}
        {!!cart[id] && (
          <div className="flex items-center justify-center gap-x-2">
            {/* Decrease button or remove button */}
            {cart[id] == 1 ? (
              <FaRegTrashAlt
                className="cursor-pointer rounded-md bg-primary p-1 text-2xl text-white"
                onClick={() => dispatchQuery({ type: "decrease", payload: id })}
              />
            ) : (
              <FaMinus
                className="cursor-pointer rounded-md bg-primary p-1 text-2xl text-white"
                onClick={() => dispatchQuery({ type: "decrease", payload: id })}
              />
            )}
            {/* Display the current quantity of the product in the cart */}
            {cart[id]}
            {/* Increase button */}
            <FaPlus
              className="cursor-pointer rounded-md bg-primary p-1 text-2xl text-white"
              onClick={() => dispatchQuery({ type: "increase", payload: id })}
            />
          </div>
        )}
      </div>
    </div>
  );
}

// Export the Product component as the default export
export default Product;
