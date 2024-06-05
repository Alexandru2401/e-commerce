import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../components/Card";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function NewProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <section className="m-4 d-flex align-items-center flex-column justify-content-center">
      <h2>Latest Products</h2>
      <Container>
        <Row className="m-3">
          {products.slice(14, 20).map((product) => (
            <Col>
              <ProductCard
                key={product.id}
                img={product.image}
                title={product.title}
                price={product.price}
                id={product.id}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Link to="/offers">
        <Button variant="info">See all</Button>
      </Link>
    </section>
  );
}

export default NewProduct;
