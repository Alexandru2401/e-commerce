import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../store/context";
import { addToCart } from "../store/actions";

function ProductCard(props) {
  const { img, title, description, price, id } = props;
  const { dispatch } = useContext(CartContext);
  const [showNotification, setShowNotification] = useState(false);

  function handleAddToCart(product) {
    const actionResult = addToCart(product);
    dispatch(actionResult);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  }
  return (
    <Card
      style={{ width: "20rem", overflow: "hidden", maxHeight: "600px" }}
      className="m-2 p-3"
    >
      <Card.Img variant="top" src={img} style={{ height: "250px" }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ maxHeight: "100px", overflow: "hidden" }}>
          {" "}
          {description}
        </Card.Text>

        <Card.Text> {price}$</Card.Text>
        <Link to={`/details/${id}`}>
          <Button>See details</Button>
        </Link>
        <Button
          className="m-2"
          onClick={() => {
            handleAddToCart({
              id,
              title,
              description,
              price,
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
  );
}

export default ProductCard;
