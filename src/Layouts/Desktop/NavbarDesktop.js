import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

function NavbarDesktop() {
  return (
    <Navbar fixed="top" className="border-bottom" bg="light" expand="lg">
      <Container fluid className="ms-4 me-4">
        <Navbar.Brand href="/">
          <img
            src="/remove-bg.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              target="_blank"
              href="https://github.com/fauziafifnevandi/remove-bg"
            >
              How it Works
            </Nav.Link>
            <Nav.Link
              target="_blank"
              href="https://github.com/fauziafifnevandi/remove-bg"
            >
              Tools & Api
            </Nav.Link>
          </Nav>
          <Button href="/workspace" className="me-3">
            Remove Background
          </Button>
          <Button
            onClick={() => {
              alert("features are coming soon");
            }}
            variant="outline-secondary"
          >
            Log in
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDesktop;
