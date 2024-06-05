import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../components/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Offers() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
        console.log(products);
      });
  }, []);
  return (
    <section className="m-3 d-flex align-items-center flex-column justify-content-center">
      <h1>Product List</h1>
      <Container className="m-3">
        <Row className="m-3 d-flex align-items-center justify-content-center">
          {products.map((product) => (
            <>
              <ProductCard
                key={product.id}
                img={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                id={product.id}
              />
            </>
          ))}
        </Row>
      </Container>
    </section>
  );
}
