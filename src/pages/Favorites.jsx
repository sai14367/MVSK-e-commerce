import { Link } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";

function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="container">
      <h1>Favorites</h1>

      {favorites.length === 0 ? (
        <div className="empty-state">
          <p>No favorites yet</p>
          <Link to="/products" className="btn btn-primary">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="products-grid">
          {favorites.map((product) => (
            <div key={product.id} className="card">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
              />

              <h3>{product.name}</h3>

              <p className="price">₹{product.price.toLocaleString()}</p>

              <div className="card-actions">
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  View Details
                </Link>
                <button
                  className="btn btn-secondary"
                  onClick={() => removeFavorite(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;