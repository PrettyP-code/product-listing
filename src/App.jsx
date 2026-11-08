
import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import products from "./data/products";
import "./App.css";

function App() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  // Get products based on search and category
  let filteredProducts = products.filter((product) => {

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  // Sort products
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div id="home">

      <Navbar />

      <header className="header">
        <h1>Discover Our Products</h1>
        <p>Find the best products at the best prices.</p>
      </header>

      <section className="container" id="products">

        <h2>Our Products</h2>

        <div className="filters">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Home">Home</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">Sort By</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="rating">Rating: High to Low</option>
          </select>

        </div>

        <p className="result">
          Showing {filteredProducts.length} products
        </p>

        {filteredProducts.length > 0 ? (
          <ProductList products={filteredProducts} />
        ) : (
          <p className="no-products">No products found!</p>
        )}

      </section>

      <footer id="about">
        <p>© 2026 ShopEase. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;

