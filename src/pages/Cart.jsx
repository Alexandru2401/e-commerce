import React, { useContext, useState } from "react";
import { CartContext } from "../store/context";
import Button from "react-bootstrap/esm/Button";
import { removeFromCart } from "../store/actions";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const location = useLocation();
  const spacificPage = location.pathname === "/cart";
  function handleRemove(productId) {
    const actionResult = removeFromCart(productId);
    dispatch(actionResult);
  }

  const totalPrice = state.products.reduce(
    (acc, offert) => acc + offert.price,
    0
  );
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ minHeight: "60vh" }}
    >
      {state.products.length === 0 ? (
        <p className="m-3">You don't have any product added to cart!</p>
      ) : (
        state.products.map((product) => {
          return (
            <>
              <Container className="d-flex align-items-center justify-content-center flex-column">
                <Card className="m-2" style={{ width: "60%" }}>
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text
                      style={{ maxHeight: "100px", overflow: "hidden" }}
                    >
                      {" "}
                      {product.description}
                    </Card.Text>
                    <Card.Text> {product.price}$</Card.Text>
                  </Card.Body>

                  <Button
                    variant="danger"
                    style={{ width: "150px" }}
                    className="mx-auto mb-2"
                    onClick={() => {
                      handleRemove(product.id);
                    }}
                  >
                    Delete
                  </Button>
                </Card>
              </Container>
            </>
          );
        })
      )}
      <p>Total price: {totalPrice.toFixed(2)}$</p>
      {state.products.length >= 1 && (
        <Link to="/paypage">
          <Button
            variant="success"
            style={{
              width: "150px",
              visibility: spacificPage ? "visible" : "hidden",
            }}
            className="mb-2 p-2"
          >
            Pay
          </Button>
        </Link>
      )}
    </div>
  );
}
