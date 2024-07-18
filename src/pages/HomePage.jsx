// HomePage.jsx

// Import necessary components
import Form from "../components/Form";
import Products from "../components/Products";
import Sidebar from "../components/Sidebar";

// Define the HomePage component
function HomePage() {
  return (
    // Main container with responsive layout
    <div className="flex min-h-full w-full grow flex-col gap-y-4">
      {/* Render the Form component */}
      <Form />

      {/* Container for the Products and Sidebar components with responsive layout */}
      <div className="flex min-h-full grow flex-col-reverse flex-nowrap justify-between gap-x-5 gap-y-5 sm:flex-row md:gap-x-10">
        {/* Render the Products component */}
        <Products />

        {/* Render the Sidebar component */}
        <Sidebar />
      </div>
    </div>
  );
}

// Export the HomePage component as the default export
export default HomePage;
