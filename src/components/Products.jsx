// Products.jsx

import { useContext, useEffect } from "react";
import { ProductsContext } from "../contexts/ProductsProviders";
import Product from "./Product";
import { Grid } from "react-loader-spinner";

function Products() {
  // Destructure products, query, and setSearchParams from ProductsContext
  const { products, query, setSearchParams } = useContext(ProductsContext);

  // useEffect to update search parameters when query changes
  useEffect(() => {
    const newQuery = { search: query.search, category: query.category };
    // Remove 'category' from query if it is set to "all"
    newQuery.category === "all" ? delete newQuery.category : null;
    // Remove 'search' from query if it is an empty string
    newQuery.search === "" ? delete newQuery.search : null;
    // Update search parameters
    setSearchParams(newQuery);
  }, [query]); // Dependency array includes 'query' to trigger useEffect on its change

  return (
    <>
      {/* Show loader if there are no products */}
      {(!products.length && (
        <div className="loaderContainer flex h-full w-full grow items-center justify-center self-center">
          <Grid
            visible={true}
            height="80"
            width="80"
            color="#be185d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass="grid-wrapper"
          />
        </div>
      )) || (
        // Display products in a grid layout if products are available
        <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
          {products.map((item) => {
            // Render Product component for each item
            return <Product key={item.id} {...item} />;
          })}
        </div>
      )}
    </>
  );
}

export default Products;
