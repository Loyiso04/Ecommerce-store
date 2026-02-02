import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar flex container">
        <a href="#" className="logo">
          Vogue<span>Vortex</span>
        </a>

        <ul className="navlist flex">
          {["Home", "Shop", "Page", "Blog", "Contact"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className={`link ${item === "Home" ? "link-active" : ""}`}
              >
                {item}
              </a>
            </li>
          ))}

          <li className="nav-icons flex">
            <a href="#" className="icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-solid fa-user"></i>
            </a>
            <a href="#" className="icon icon-active">
              <i className="fa-solid fa-shopping-bag"></i>
            </a>
          </li>
        </ul>

        <a href="#" className="hamburger">
          <i className="fa-solid fa-bars"></i>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
