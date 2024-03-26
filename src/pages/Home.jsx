import CategoryItem from "../components/FeaturedItem";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Parallax from "../components/Parallax";
import ProductCategories from "../components/ProductCategories";
import ScrollingText from "../components/ScrollingText";
import Featured from "../components/Featured";
import FeaturedItem from "../components/FeaturedItem";

const Home = () => {
  return (
    <div>
      <Header />
      <Featured />
      <FeaturedItem />
      <Parallax />
      <ScrollingText />
      <ProductCategories />
      <Footer />
    </div>
  );
};

export default Home;
