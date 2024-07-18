// Form.jsx

// Import necessary hooks and components
import { useContext, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io"; // Import search icon
import { ProductsContext } from "../contexts/ProductsProviders"; // Import ProductsContext for state management

// Define the Form component
function Form() {
  const [searchInput, setSearchInput] = useState(""); // State to store the search input
  const { dispatchQuery, query } = useContext(ProductsContext); // Destructure dispatchQuery function and query state from ProductsContext

  // Update the search input state when the query.search changes
  useEffect(() => {
    setSearchInput(query.search);
  }, [query.search]);

  return (
    // Main container with styling
    <div className="mt-1 flex h-8 w-full items-stretch justify-stretch gap-x-1">
      {/* Search input field */}
      <input
        className="w-80 rounded-md border border-slate-700 px-2 text-sm"
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={(event) => {
          setSearchInput(event.target.value); // Update the search input state on change
        }}
      />

      {/* Search button */}
      <div
        onClick={() => {
          dispatchQuery({ type: "search", payload: searchInput }); // Dispatch search action with the current search input
        }}
      >
        <IoIosSearch className="h-full w-fit cursor-pointer rounded-md bg-primary p-1 text-white" />
      </div>
    </div>
  );
}

// Export the Form component as the default export
export default Form;
