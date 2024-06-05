import React, { useState } from "react";
import Cart from "./Cart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PayForm from "../components/PayForm";

export default function PayPage() {
  return (
    <Container className="form-section">
      <Row>
        <Col xs={12} md={6}>
          <PayForm />
        </Col>
        <Col xs={12} md={6}>
          <Cart />
        </Col>
      </Row>
    </Container>
  );
}
