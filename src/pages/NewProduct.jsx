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
    <section className="m-2 d-flex align-items-center flex-column justify-content-center">
      <h2>Latest Products</h2>
      <Container>
        <Row className="m-2 justify-content-center">
          {products.slice(14, 20).map((product) => (
            <Col
              xs={12}
              md={6}
              lg={4}
              className="mb-4 d-flex justify-content-center"
            >
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
