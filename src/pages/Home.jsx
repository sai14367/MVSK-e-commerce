import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-wrapper">
      <div className="container">
        {/* Hero Section with Image */}
        <section className="hero-with-image">
          <div className="hero-content">
            <h1>Welcome to MVSK SmartShop</h1>
            <p>Discover amazing products at the best prices.</p>
            <Link to="/products" className="btn btn-primary">
              Browse Products
            </Link>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=400&fit=crop" 
              alt="Shopping" 
              loading="lazy"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <h2>Why Choose SmartShop?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <img 
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=300&h=300&fit=crop" 
                alt="Best Prices" 
                loading="lazy"
              />
              <h3>Best Prices</h3>
              <p>Unbeatable deals on all products</p>
            </div>
            <div className="feature-card">
              <img 
                src="https://images.unsplash.com/photo-1523634126174-e41b99b9cead?w=300&h=300&fit=crop" 
                alt="Fast Shipping" 
                loading="lazy"
              />
              <h3>Fast Shipping</h3>
              <p>Quick delivery to your doorstep</p>
            </div>
            <div className="feature-card">
              <img 
                src="https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=300&h=300&fit=crop" 
                alt="Secure Payment" 
                loading="lazy"
              />
              <h3>Secure Payment</h3>
              <p>Safe and encrypted transactions</p>
            </div>
            <div className="feature-card">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop" 
                alt="Customer Support" 
                loading="lazy"
              />
              <h3>24/7 Support</h3>
              <p>Always here to help you</p>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="categories">
          <h2>Shop by Category</h2>
          <div className="categories-grid">
            <div className="category-card">
              <img 
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" 
                alt="Electronics" 
                loading="lazy"
              />
              <div className="category-overlay">
                <h3>Electronics</h3>
              </div>
            </div>
            <div className="category-card">
              <img 
                src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop" 
                alt="Accessories" 
                loading="lazy"
              />
              <div className="category-overlay">
                <h3>Accessories</h3>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <img 
            src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=300&fit=crop" 
            alt="Special Offer" 
            loading="lazy"
          />
          <div className="cta-content">
            <h2>Exclusive Deals Await!</h2>
            <p>Get up to 50% off on selected items</p>
            <Link to="/products" className="btn btn-primary">
              Shop Now
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;