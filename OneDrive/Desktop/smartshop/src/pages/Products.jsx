import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

function Products() {

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (

    <div className="container">

      <h1>Products</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="products-grid">

        {filteredProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </div>

  );
}

export default Products;