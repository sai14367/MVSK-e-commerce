import { Link } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";

function Navbar() {
  const { favorites } = useFavorites();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <h2>SmartShop</h2>
      </Link>

      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/favorites" className="nav-link favorites-link">
          Favorites
          {favorites.length > 0 && (
            <span className="badge">{favorites.length}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;