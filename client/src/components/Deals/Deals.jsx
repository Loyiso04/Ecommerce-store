import "./Deals.css";

const deals = [
  {
    icon: "ri-sparkling-2-line",
    title: "Trending Styles Weekly",
    desc: "Fresh drops you'll love, perfect fit guarantee!",
  },
  {
    icon: "ri-checkbox-line",
    title: "Premium Quality Fabrics",
    desc: "Soft, durable & carefully selected materials",
  },
  {
    icon: "ri-repeat-line",
    title: "Easy Returns",
    desc: "Hassle-free returns within 14 days of purchase",
  },
];

const Deals = () => {
  return (
    <section className="section__container deals__container">
      <div className="deals__card">
        <h2 className="section__header">Hot 🔥 deals for you</h2>
        <p>Online shopping for retail sales direct to consumers</p>
      </div>

      {deals.map((deal, index) => (
        <div className="deals__card" key={index}>
          <span><i className={deal.icon}></i></span>
          <h4>{deal.title}</h4>
          <p>{deal.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default Deals;
