
function ProductCard({ product }) {

  function addToCart() {
    console.log(product.name);
  }

  return (
    <div className="product-card">

      <img src={product.image} alt={product.name} />

      <div className="product-info">
        <h3>{product.name}</h3>

        <p>Category: {product.category}</p>

        <p className="price">₹{product.price}</p>

        <p>⭐ {product.rating}</p>

        <button onClick={addToCart}>
          Add to Cart
        </button>
      </div>

    </div>
  );
}

export default ProductCard;
