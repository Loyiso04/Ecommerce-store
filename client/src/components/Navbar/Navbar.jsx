import { useState } from "react";
import { Link } from "react-router-dom";
import "../MenuSection/MenuSection.css";
import MenuSection from "../MenuSection/MenuSection";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <nav className="navbar flex container">

          <Link to="/" className="logo">
            Vogue<span>Vortex</span>
          </Link>

              <div className="nav-search-container">
            <input
              type="text"
              placeholder="Search for products..."
              className="nav-search-input"
            />
            <button className="nav-search-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <div className="nav-icons flex nav-desktop">

            <Link to="/wishlist" className="icon">
              <i className="fa-solid fa-heart"></i>
            </Link>

            <Link to="/login" className="icon">
              <i className="fa-solid fa-user"></i>
            </Link>

            <Link to="/cart" className="icon icon-active">
              <i className="fa-solid fa-shopping-bag"></i>
            </Link>

            <select className="language-selector">
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
            </select>

          </div>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

        </nav>
      </header>

      <MenuSection isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
