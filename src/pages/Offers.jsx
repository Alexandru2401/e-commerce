import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../components/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";

export default function Offers() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState([]);

  function filterProducts(category) {
    const newFilterProducts = products.filter((currentCategory) => {
      return currentCategory.category === category;
    });
    setFilter(newFilterProducts);
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
        setFilter(products);
      });
  }, []);
  return (
    <section className="m-3 d-flex align-items-center flex-column justify-content-center">
      <h1>Product List</h1>
      <Form className="mt-2">
        <Row className="d-flex justify-content-center">
          <Col xs="12" lg="4" className="mb-2 mb-lg-0">
            <Form.Control
              type="text"
              placeholder="Search for a product..."
              className=" mr-sm-2"
              onChange={(e) => {
                setQuery(e.target.value.toLowerCase());
              }}
            />
          </Col>
          <Col xs="12" lg="6">
            <div className="d-flex flex-wrap">
              <Button
                variant="primary"
                style={{ width: "150px" }}
                className="mx-2 mb-2"
                onClick={() => filterProducts("men's clothing")}
              >
                Men's Clothing
              </Button>
              <Button
                variant="primary"
                style={{ width: "150px" }}
                className="mx-2 mb-2"
                onClick={() => filterProducts("women's clothing")}
              >
                Women' Clothing
              </Button>
              <Button
                variant="primary"
                style={{ width: "150px" }}
                className="mx-2 mb-2"
                onClick={() => filterProducts("jewelery")}
              >
                Jeweley
              </Button>
              <Button
                variant="primary"
                style={{ width: "150px" }}
                className="mx-2 mb-2"
                onClick={() => filterProducts("electronics")}
              >
                Eletronics
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
      {/* <div className="container mt-5">
        <Button
          variant="primary"
          style={{ width: "150px" }}
          className="mx-2 mb-2"
          onClick={()=>filterProducts("men's clothing")}
        >
          Men's Clothing
        </Button>
        <Button
          variant="primary"
          style={{ width: "150px" }}
          className="mx-2 mb-2"
          onClick={()=>filterProducts("women's clothing")}
        >
          Women' Clothing
        </Button>
        <Button
          variant="primary"
          style={{ width: "150px" }}
          className="mx-2 mb-2"
          onClick={()=>filterProducts("jewelery")}
        >
          Jeweley
        </Button>
        <Button
          variant="primary"
          style={{ width: "150px" }}
          className="mx-2 mb-2"
          onClick={()=>filterProducts("electronics")}
        >
          Eletronics
        </Button>
      </div> */}
      <Container className="m-3">
        <Row className="m-3 d-flex align-items-center justify-content-center">
          {filter
            .filter((product) => product.title.toLowerCase().includes(query))
            .map((product) => (
              <ProductCard
                key={product.id}
                img={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                id={product.id}
              />
            ))}
        </Row>
      </Container>
    </section>
  );
}
