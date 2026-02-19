import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MenuSection.css";

const MenuSection = ({ isOpen, onClose }) => {
  const [visible, setVisible] = useState(isOpen);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setClosing(false);
    } else if (visible) {
      setClosing(true);
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 350);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!visible) return null;

  return (
    <>
      <div
        className={`menu-overlay ${closing ? "fade-out" : "fade-in"}`}
        onClick={onClose}
      ></div>

      <div className={`menu-section ${isOpen && !closing ? "open" : "close"}`}>
        <button className="close-btn" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>

        <ul className="menu-list">
          <li>
            <Link to="/" onClick={onClose}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/shop" onClick={onClose}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/category/women" onClick={onClose}>
              Women
            </Link>
          </li>
          <li>
            <Link to="/category/men" onClick={onClose}>
              Men
            </Link>
          </li>
          <li>
            <Link to="/category/kids" onClick={onClose}>
              Kids
            </Link>
          </li>
          <li>
            <Link to="/category/accessories" onClick={onClose}>
              Accessories
            </Link>
          </li>

          <li>
            <Link to="/newsletter" onClick={onClose}>
              Newsletter
            </Link>
          </li>

          <hr />

          <li>
            <Link to="/login" onClick={onClose}>
              Sign In / Register
            </Link>
          </li>
          <li>
            <Link to="/orders" onClick={onClose}>
              Track Orders
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={onClose}>
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuSection;