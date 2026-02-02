import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="section">
      <div className="secondary-bg">
        <form className="container flex wrap">
          <h3>Sign up for Send Newsletter</h3>

          <div className="input-container flex">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              autoComplete="off"
            />
            <button type="submit">Subscribe</button>
          </div>

          <div className="social-icons flex">
            <a href="#" className="media">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="media">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" className="media">
              <i className="fa-brands fa-google"></i>
            </a>
            <a href="#" className="media">
              <i className="fa-brands fa-behance"></i>
            </a>
            <a href="#" className="media">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
