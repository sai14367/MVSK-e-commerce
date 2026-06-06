import { Link } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";

function ProductCard({ product }) {
  const { isFavorite, addFavorite } = useFavorites();

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    addFavorite(product);
  };

  return (
    <div className="card">
      <div className="card-image">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
        <button
          className={`favorite-btn ${isFavorite(product.id) ? "active" : ""}`}
          onClick={handleFavoriteClick}
          title={isFavorite(product.id) ? "In Favorites" : "Add to Favorites"}
        >
          {isFavorite(product.id) ? "♥" : "♡"}
        </button>
      </div>

      <h3>{product.name}</h3>

      <p className="category">{product.category}</p>

      <p className="price">₹{product.price.toLocaleString()}</p>

      <Link to={`/product/${product.id}`} className="btn btn-primary">
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;