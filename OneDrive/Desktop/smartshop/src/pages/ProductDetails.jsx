import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import { useFavorites } from "../hooks/useFavorites";

function ProductDetails() {
  const { id } = useParams();
  const { addFavorite, isFavorite } = useFavorites();
  const [isAdded, setIsAdded] = useState(false);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="container">
        <div className="not-found">
          <h2>Product not found</h2>
        </div>
      </div>
    );
  }

  const handleAddToFavorites = () => {
    const added = addFavorite(product);
    if (added) {
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }
  };

  return (
    <div className="container">
      <div className="details-card">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="product-image"
        />

        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="category">Category: {product.category}</p>
          <p className="price">₹{product.price.toLocaleString()}</p>

          <button
            className={`btn ${isFavorite(product.id) ? "btn-secondary" : "btn-primary"}`}
            onClick={handleAddToFavorites}
            disabled={isFavorite(product.id)}
          >
            {isFavorite(product.id) ? "✓ In Favorites" : "Add To Favorites"}
          </button>

          {isAdded && <p className="success-message">✓ Added to Favorites!</p>}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;