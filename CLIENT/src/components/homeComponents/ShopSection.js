import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import styled from "styled-components";
//import ImageSHhoe from "../../images/3.png"

const Info = styled.div`
  height: 250px;
  position: relative;
  overflow: hidden;
  width: 100%;
  background-color: #f6f6f6;
  transition: all 0.5s ease;
  `;
const Image=styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
`;

const Container = styled.div`
    &:hover ${Info}{
      opacity: 1;
    }
  `;
const ShopSection = (props) => {
  const { cate, keyword, pagenumber } = props;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;



  useEffect(() => {
    dispatch(listProduct(keyword, pagenumber));
  }, [dispatch, keyword, pagenumber]);
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {loading ? (
                  <div className="mb-5">
                    <Loading />
                  </div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>
                    {cate!==""?
                    products.map((product) => {
                      if(product.cat===cate){
                        return (
                        <div
                          className="shop col-lg-4 col-md-6 col-sm-6"
                          key={product._id}
                          >
                          <div className="border-product">
                          <Link to={`/products/${product._id}`}>
                            <Container>
                              <Info>
                                <Image src={product.image} alt={product.name} />
                              </Info>
                              </Container>
                            </Link>

                            <div className="shoptext">
                              <p>
                                <Link to={`/products/${product._id}`}>
                                  {product.name}
                                </Link>
                              </p>

                              <Rating
                                value={product.rating}
                                text={`${product.numReviews} reviews`}
                              />
                              <h3>${product.price}</h3>
                            </div>
                          </div>
                        </div>
                      )}else return null
                    }):
                    products.map((product) => {
                        return (
                        <div
                          className="shop col-lg-4 col-md-6 col-sm-6"
                          key={product._id}
                        >
                          <div className="border-product">
                            <Link to={`/products/${product._id}`}>
                            <Container>
                              <Info>
                                <Image src={product.image} alt={product.name} />
                              </Info>
                              </Container>
                            </Link>

                            <div className="shoptext">
                              <p>
                                <Link to={`/products/${product._id}`}>
                                {product.name}
                                </Link>
                              </p>

                              <Rating
                                value="5"
                                text={`${product.numReviews} reviews`}
                              />
                              <h3>${product.price}</h3>
                            </div>
                          </div>
                        </div>
                      )
                    })
                    }
                  </>
                )}
                
                {/* Pagination */
                cate===""&&
                (<Pagination
                  pages={pages}
                  page={page}
                  keyword={keyword ? keyword : ""}
                />)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
