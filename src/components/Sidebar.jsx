// Sidebar.jsx

import { IoIosList } from "react-icons/io";
import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsProviders";

function Sidebar() {
  // Destructure categories, dispatchQuery, and category from ProductsContext
  const {
    categories,
    dispatchQuery,
    query: { category },
  } = useContext(ProductsContext);

  return (
    <ul className="px-e flex h-fit w-full min-w-[10rem] shrink-0 flex-col gap-y-2 rounded-lg border border-dashed border-black bg-white px-3 py-3 font-semibold sm:w-2/12">
      {/* Sidebar title with icon */}
      <li className="flex items-center font-bold text-primary">
        <IoIosList className="mr-2" /> Categories
      </li>
      {/* Map over categories and render a list item for each */}
      {categories.map((item, index) => {
        return (
          <li
            className={`rounded-md px-2 capitalize hover:cursor-pointer ${
              category === item ? "bg-primary text-white" : ""
            }`}
            key={index}
            onClick={() => {
              // Dispatch query action to update category
              dispatchQuery({ type: "category", payload: item });
            }}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default Sidebar;
