// ProductDetailPage.jsx

// Import necessary hooks and components
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/axiosConfig"; // Import API configuration
import { shortTitle } from "../functions/common"; // Import a utility function for shortening titles
import { IoMdArrowRoundBack } from "react-icons/io"; // Import back arrow icon
import { FaTags } from "react-icons/fa6"; // Import tags icon
import { MdPriceCheck } from "react-icons/md"; // Import price check icon

// Define the ProductDetailPage component
function ProductDetailPage() {
  const { id } = useParams(); // Get the product ID from the route parameters
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [{ title, price, description, category, image }, setProductDetail] =
    useState({}); // State to store product details

  // Fetch product details when the component mounts or when the ID changes
  useEffect(() => {
    api(`/products/${id}`).then((response) => {
      setProductDetail(response);
    });
  }, [id]);

  return (
    <div>
      {/* Render product details if the title exists */}
      {!!title && (
        <div className="flex flex-col flex-nowrap items-center justify-center gap-x-5 gap-y-4 sm:flex-row sm:items-start sm:justify-center lg:gap-x-10">
          {/* Product image container */}
          <div className="w-full max-w-xs rounded-md border border-dashed border-primary bg-white p-2 sm:w-3/12 lg:rounded-2xl lg:p-5">
            <img className="" src={image} alt={title} />
          </div>

          {/* Product details container */}
          <div className="flex w-full flex-col rounded-3xl border border-dashed border-primary p-4 sm:w-9/12 sm:flex-row sm:p-10">
            <div className="flex flex-col gap-y-5">
              {/* Product title */}
              <h1 className="text-2xl font-bold text-primary">
                {shortTitle(title)}
              </h1>
              {/* Product description */}
              <p>{description}</p>

              {/* Product category */}
              <div className="flex items-center justify-start gap-x-1">
                <FaTags className="text-primary" />
                <span className="font-bold">{category}</span>
              </div>

              {/* Product price */}
              <div className="flex items-center justify-start gap-x-1">
                <MdPriceCheck className="text-primary" />
                <span className="font-bold">{price}$</span>
              </div>
            </div>

            {/* Back to Shop button */}
            <button
              className="flex w-full shrink-0 items-center justify-center gap-x-2 self-end rounded-lg bg-primary px-1 py-1 text-center text-sm text-white sm:w-32"
              onClick={() => navigate("/products")}
            >
              <IoMdArrowRoundBack /> Back to Shop
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Export the ProductDetailPage component as the default export
export default ProductDetailPage;
