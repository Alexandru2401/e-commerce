import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import PayMethod from "./PayMethod";

function PayForm() {
  const [showMessage, setMessage] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setMessage(true);
    }
    setValidated(true);
  };

  return (
    <section className="form-section">
      <div className="d-flex align-items-center justify-content-center">
        <h2 className="m-3">Payment Details</h2>
      </div>
      {showMessage ? (
        <div className="d-flex align-items-center justify-content-center m-2">
          {" "}
          <p>
            The delivery process has started ! If your have any question about
            delivery, you have a contact page with a our contact details. You
            also have the list of the products you ordered here. Thank you for
            your payment!
          </p>
        </div>
      ) : (
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="d-flex flex-column justift-content-center align-items-center flex-wrap m-3"
        >
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCostomFname"
            style={{ minWidth: "300px" }}
          >
            <Form.Label>First name</Form.Label>
            <Form.Control required type="text" placeholder="First name" />
            <Form.Control.Feedback type="invalid">
              First name is empty
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustomLname"
            style={{ minWidth: "300px" }}
          >
            <Form.Label>Last name</Form.Label>
            <Form.Control required type="text" placeholder="Last name" />
            <Form.Control.Feedback type="invalid">
              Last name is empty
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustomLname"
            style={{ minWidth: "300px" }}
          >
            <Form.Label>Country</Form.Label>
            <Form.Control required type="text" placeholder="Last name" />
            <Form.Control.Feedback type="invalid">
              Last name is empty
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustomLname"
            style={{ minWidth: "300px" }}
          >
            <Form.Label>Adress</Form.Label>
            <Form.Control required type="text" placeholder="Last name" />
            <Form.Control.Feedback type="invalid">
              Last name is empty
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustomLname"
            style={{ minWidth: "300px" }}
          >
            <Form.Label>Location</Form.Label>
            <Form.Control required type="text" placeholder="Last name" />
            <Form.Control.Feedback type="invalid">
              Last name is empty
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustomLname"
            style={{ minWidth: "300px" }}
          >
            <Form.Label>City</Form.Label>
            <Form.Control required type="text" placeholder="Last name" />
            <Form.Control.Feedback type="invalid">
              Last name is empty
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustomEmail"
            style={{ minWidth: "300px" }}
          >
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                placeholder="Ex: e-com@gmail.com"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustomPhone"
            style={{ minWidth: "300px" }}
          >
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ex: 012 345 679"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid phone number
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="m-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <PayMethod />
          <Button
            variant="success"
            type="submit"
            className="m-3"
            style={{ width: "150px" }}
          >
            Pay
          </Button>
        </Form>
      )}
    </section>
  );
}

export default PayForm;
