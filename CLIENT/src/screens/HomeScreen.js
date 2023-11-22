import React from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import Categories from "./../components/homeComponents/Categories";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";
import Slider from "./../components/homeComponents/Slider"
import ScrollButton from "../components/homeComponents/ScrollButton/ScrollUpButton";
import SliderCopy from "../components/homeComponents/Slider copy";
const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div>
      <Header />
      <div style={{height: "100px"}}></div>
      <SliderCopy/>
      <Categories/>
      <ShopSection cate={""} keyword={keyword} pagenumber={pagenumber} />
      <CalltoActionSection />
      <Footer />
      <ScrollButton/>
    </div>
  );
};

export default HomeScreen;
