import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import SaleSlider from "./components/SaleSlider/SaleSlider";
import SecondaryBg from "./components/SecondaryBg/SecondaryBg";
import Deals from "./components/Deals/Deals";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import MenuSection from "./components/MenuSection/MenuSection"


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories/>
      <Products/>
      <SaleSlider/>
      <SecondaryBg/>
      <Deals/>
      <Newsletter/>
      <Footer/>
      <MenuSection/>
    </>
  );
}

export default App;

