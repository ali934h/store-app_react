// PageNotFound.jsx
import { Link } from "react-router-dom"; // Import Link component for navigation

// Define the PageNotFound component
function PageNotFound() {
  return (
    // Main container with flexbox layout to center content
    <div className="flex h-full w-full shrink-0 grow flex-col items-center justify-center gap-4 bg-slate-50">
      {/* Display a large 404 error message */}
      <h1 className="text-9xl font-extrabold">404</h1>

      {/* Display a message indicating the page was not found */}
      <p className="text-2xl">Sorry, we couldn't find this page.</p>

      {/* Link to navigate back to the home page */}
      <Link
        className="rounded-md border border-slate-600 bg-primary px-4 py-2 text-xl font-bold text-white"
        to="/"
      >
        Back to home
      </Link>
    </div>
  );
}

// Export the PageNotFound component as the default export
export default PageNotFound;
