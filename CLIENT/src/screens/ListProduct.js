import React from 'react'
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Categories from "./../components/homeComponents/Categories";
import Footer from "./../components/Footer";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ScrollButton from '../components/homeComponents/ScrollButton/ScrollUpButton';


const Title = styled.h1`
  margin-left:140px;
`;
const ListProduct = ({ match }) => {
    const location = useLocation();
    const cate = location.pathname.split("/")[2];
    setTimeout(() => {
      window.scrollTo({ top: 520, left: 0, behavior: 'smooth' });
    }, 0);
    const keyword = match.params.keyword;
    const pagenumber = match.params.pagenumber;
  return (
    <div>
      <Header />
      <div style={{height: "100px"}}></div>
      <Categories/>
      <Title>{cate.toUpperCase()}</Title>
      <ShopSection cate={cate} keyword={keyword} pagenumber={pagenumber} />
      <CalltoActionSection />
      <ScrollButton/>
      <Footer />
      </div>
  )
}

export default ListProduct