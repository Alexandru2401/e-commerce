import React, { useState } from "react";
import { Form } from "react-bootstrap";

function PayMethod() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const handlePayMethod = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div>
      <h2>Select Payment Method</h2>
      <Form>
        <Form.Check
          type="radio"
          label="Pay with Card"
          name="paymentMethod"
          id="card"
          value="card"
          checked={paymentMethod === "card"}
          onChange={handlePayMethod}
        />
        <Form.Check
          type="radio"
          label="Pay with Cash"
          name="paymentMethod"
          id="cash"
          value="cash"
          checked={paymentMethod === "cash"}
          onChange={handlePayMethod}
        />
      </Form>

      {paymentMethod === "card" && (
        <div className="card-details">
          <h3>Card Details</h3>
          <Form>
            <Form.Group>
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="text" placeholder="Enter card number" />
              <Form.Control.Feedback type="invalid">
                Card number is empty
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control type="text" placeholder="MM/YY" />
              <Form.Control.Feedback type="invalid">
                Expiry date is empty
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>CVC</Form.Label>
              <Form.Control type="text" placeholder="Enter CVC" />
              <Form.Control.Feedback type="invalid">
                CVC is empty
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter CVC" />
              <Form.Control.Feedback type="invalid">
                Name is empty
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </div>
      )}

      {paymentMethod === "cash" && (
        <div className="cash-details">
          <h3>Cash Payment Instructions</h3>
          <p>Please pay the delivery person when your order arrives.</p>
        </div>
      )}
    </div>
  );
}

export default PayMethod;
