import "./SecondaryBg.css";

const services = [
  {
    icon: "fa-truck",
    title: "Free Shipping",
    desc: "Free Shipping on orders over R1 500",
  },
  {
    icon: "fa-bolt",
    title: "Fast Delivery",
    desc: "Quick and reliable shipping",
  },
  {
    icon: "fa-gift",
    title: "Gift For All",
    desc: "Receive Gift When Creating Membership",
  },
  {
    icon: "fa-clock",
    title: "Open All Week",
    desc: "09:00am - 17:30pm",
  },
];

const SecondaryBg = () => {
  return (
    <section className="section">
      <div className="secondary-bg">
        <div className="container flex wrap">
          {services.map((item, index) => (
            <div className="box" key={index}>
              <i className={`fa-solid ${item.icon}`}></i>
              <h5>
                <a href="#">{item.title}</a>
              </h5>
              <p className="des">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondaryBg;
