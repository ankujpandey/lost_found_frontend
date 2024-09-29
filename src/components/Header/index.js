import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./style.css"
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  const navbarStyle = {
    backgroundColor: "#FFEEA9",
    color: "#fff",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19)",
  };
  return (
    <Navbar sticky="top" style={navbarStyle} expand="lg">
      <Container>
        <Navbar.Brand href="/">Lost & Found</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#find">Find an Item</Nav.Link>
            <Nav.Link href="#lost">Lost Something</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Item>
              <button onClick={()=>navigate("/sign-in", { replace: true })} className="btn btn-primary px-4 rounded-pill mx-1">
                Login
              </button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;