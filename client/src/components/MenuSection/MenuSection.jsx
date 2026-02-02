import { Link } from "react-router-dom";

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu">
      <button className="close-btn" onClick={onClose}>
        <i className="fa-solid fa-xmark"></i>
      </button>

      <ul>
        <li><Link to="/" onClick={onClose}>Home</Link></li>
        <li><Link to="/category/hero" >Home</Link></li>
        <li><Link to="/shop" onClick={onClose}>Shop</Link></li>
        <li><Link to="/category/women">Women</Link></li>
        <li><Link to="/category/men">Men</Link></li>
        <li><Link to="/category/kids">Kids</Link></li>
        <li><Link to="/category/accessories">Accessories</Link></li>
        <li><link to="/category/newsletter"></link></li>

        <hr />

        <li><Link to="/login">My Account</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </div>
  );
};

export default MobileMenu;
