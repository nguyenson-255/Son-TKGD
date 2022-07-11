import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";

import "../styles/all-foods.css";
import "../styles/pagination.css";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

const Products = () => {
  // const [searchTerm, setSearchTerm] = useState("");

  // const searchedProduct = products.filter((item) => {
  //   if (searchTerm.value === "") {
  //     return item;
  //   }
  //   if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
  //     return item;
  //   } else {
  //     return console.log("not found");
  //   }
  // });

  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);
  const [pageNumber, setPageNumber] = useState(0);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Flower");
    // const slicePizza = filteredPizza.slice(0, 4);
    // setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "FLOWER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Flower"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "CAKE") {
      const filteredProducts = products.filter(
        (item) => item.category === "Cake"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Combo") {
      const filteredProducts = products.filter(
        (item) => item.category === "Combo"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  const productPerPage = 8;
  // const visitedPage = pageNumber * productPerPage;
  // const pageCount = Math.ceil(allProducts.length / productPerPage);
  // const displayPage = allProducts.slice(
  //   visitedPage,
  //   visitedPage + productPerPage
  // );
  
  const indexOfLastPost = pageNumber * productPerPage;
  const indexOfFirstPost = indexOfLastPost - productPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
  const pageCount = Math.ceil(products.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="Products">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
          <Col lg="12" style={{
              marginTop: "-70px",
              marginBottom: "45px"
            }}>
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "FLOWER" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("FLOWER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Flower
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "CAKE" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("CAKE")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Cake
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "COMBO" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("COMBO")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Combo
                </button>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6" xs="12">
              <h4>FLOWERS</h4>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <span>Sort by: </span>
                <select className="w-10" style={{
                  backgroundColor: "#FCF9F3",
                }}>
                  <option>Default</option>
                  {/* <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option> */}
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {products.map((item) => (
              
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns "
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Products;
