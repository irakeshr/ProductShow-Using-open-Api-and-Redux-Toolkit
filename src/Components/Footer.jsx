import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          {/* Column 1 */}
          <Col md={4}>
            <h5>Store</h5>
            <p>
              Handcrafted pots made with love and tradition.  
              Add a touch of nature to your home.
            </p>
          </Col>

          {/* Column 2 */}
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#shop" className="text-light text-decoration-none">Shop</a></li>
              <li><a href="#about" className="text-light text-decoration-none">About</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          {/* Column 3 */}
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: info@store.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Palakkad, Kerala</p>
          </Col>
        </Row>

        <hr className="border-light" />
        <p className="text-center mb-0">
          © {new Date().getFullYear()} Pottery Store. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
