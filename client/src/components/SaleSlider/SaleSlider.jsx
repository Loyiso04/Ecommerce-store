import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./SaleSlider.css";

import slide1 from "../../assets/images/new_sales.avif";
import slide2 from "../../assets/images/new_sales2.avif";
import slide3 from "../../assets/images/new_sales3.avif";

const slides = [
  { id: 1, image: slide1, title: "New Collection" },
  { id: 2, image: slide2, title: "Women's Collection" },
  { id: 3, image: slide3, title: "Men's Collection" },
];

const SaleSlider = () => {
  return (
    <section className="section">
      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{ delay: 3000 }}
        slidesPerView={1}
        className="sale-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="sale-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="sale-content">
                <h3>New Trend 2026</h3>
                <h1>{slide.title}</h1>
                <div className="line"></div>
                <h4>Big sale of this week</h4>
                <button>Shop Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SaleSlider;

