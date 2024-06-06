import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../assests/logo.png";
import { CartContext } from "../store/context";
export default function NavbarItems() {
  const { state } = useContext(CartContext);
  const productCount = state.products.length;

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutus">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/offers">
              Offers
            </Nav.Link>
            <Nav.Link as={Link} to="/testimonials">
              Testimonials
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" style={{ position: "relative" }}>
              Products
              {productCount > 0 && (
                <span className="cart-number">{productCount}</span>
              )}
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>
          <img src={logo} style={{ width: "120px", height: "70px" }} />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
