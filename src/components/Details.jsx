import Card from "react-bootstrap/Card";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { CartContext } from "../store/context";
import { addToCart } from "../store/actions";
import Button from "react-bootstrap/esm/Button";
function Details() {
  let { id } = useParams();
  const [showNotification, setShowNotification] = useState(false);
  const { state, dispatch } = useContext(CartContext);
  function handleAddToCart(product) {
    const actionResult = addToCart(product);

    dispatch(actionResult);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  }
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((product) => {
        setProduct(product);
        console.log(product);
      });
  }, [id]);

  return (
    <Container className="d-flex align-items-center justify-content-center flex-column">
      <h2 className="m-2">Details</h2>
      <Card key={id} className="m-2 w-100" style={{ maxWidth: "600px" }}>
        <Card.Img
          variant="top"
          src={product.image}
          style={{
            height: "300px",
            width: "auto",
            margin: "auto",
            objectFit: "contain",
          }}
          className="my-4"
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text style={{ maxHeight: "100px", overflow: "hidden" }}>
            {" "}
            {product.description}
          </Card.Text>
          <Card.Text> {product.price}$</Card.Text>
          <Button
            className="m-2"
            onClick={() => {
              handleAddToCart({
                id: product.id,
                title: product.title,
                description: product.description,
                price: product.price,
              });
            }}
          >
            Add to cart
          </Button>
          {showNotification && (
            <div className="notification">Product added to cart!</div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Details;
