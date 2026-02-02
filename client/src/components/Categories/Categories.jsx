import "./Categories.css";
import { categories } from "../../data/categories";

const Categories = () => {
  return (
    <section className="section">
      <div className="category-container container">
        {categories.map((cat) => (
          <div key={cat.id} className={cat.className}>
            <img src={cat.image} alt={cat.title} />

            <div className="category-content">
              <h3>{cat.title}</h3>
              <p>{cat.subtitle}</p>
              <a href="#">Shop Now</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
