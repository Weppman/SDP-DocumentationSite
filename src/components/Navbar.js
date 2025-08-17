import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-200 shadow p-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-lg font-semibold text-green-800 hover:text-green-600"
        >
          Home
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
