import BestSeller from "../componenets/BestSeller";
import EditorsPick from "../componenets/EditorsPick";
import FeaturedPosts from "../componenets/FeaturedPosts";
import HeroSlider from "../componenets/HeroSlider";
import MiddleSlider from "../componenets/MiddleSlider";
import ProductBanner from "../componenets/ProductBanner";

function HomePage() {

    return (
      <>
       <HeroSlider/>
       <EditorsPick/>
       <BestSeller/>
       <MiddleSlider/>
       <ProductBanner/>
       <FeaturedPosts/>
      </>
    )
  }
  
  export default HomePage;
  