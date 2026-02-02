const Footer = () => {
  return (
    <footer className="section">
      <div className="footer-container container flex wrap">

        <ul className="footer-list">
          {["about us", "online store", "blog", "contact"].map(item => (
            <li key={item}><a href="#" className="footer-link">{item}</a></li>
          ))}
        </ul>

        <ul className="footer-list">
          {["login / register", "your cart", "wishlist items", "checkout"].map(item => (
            <li key={item}><a href="#" className="footer-link">{item}</a></li>
          ))}
        </ul>

        <ul className="footer-list">
          {["FAQs", "terms of services", "privacy policy", "returns"].map(item => (
            <li key={item}><a href="#" className="footer-link">{item}</a></li>
          ))}
        </ul>

        <ul className="footer-list">
          <li className="footer-logo">
            <a href="#" className="logo">Vogue<span>Vortex</span></a>
          </li>
          <li><p className="detail">1 Jan Smuts Avenue, Durban</p></li>
          <li><p className="detail">KwaZulu-Natal, 42564</p></li>
          <li><p className="detail">+27 31 456 7890</p></li>
          <li><p className="detail">voguevortex@gmail.com</p></li>
        </ul>

      </div>

      <div className="footer-bottom">
        <p>  Copyright &copy;2026 <a href="#" className="footer-link">VogueVortex</a></p>
      </div>
    </footer>
  );
};

export default Footer;
