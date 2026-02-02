import { Link } from "react-router-dom";

const CartIcon = () => {
  return (
    <Link to="/cart" className="icon">
      <i className="fa-solid fa-shopping-bag"></i>
      <span className="cart-count">0</span>
    </Link>
  );
};

export default CartIcon;
