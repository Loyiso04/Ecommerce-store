import "./Products.css";
import { products } from "../../data/products";

const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <h2>New Products</h2>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product">
              <div className="product-img">
                <img src={product.image} alt={product.name} />

                <div className="product-actions">
                  <button className="fav">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                  <button className="cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </button>
                </div>
              </div>

              <p>{product.name}</p>
              <span>{product.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
