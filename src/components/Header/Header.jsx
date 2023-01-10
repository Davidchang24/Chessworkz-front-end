import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import Login from '../Account/Login';
import Logout from '../Account/Logout';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Chessworkz</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action2">Courses</Nav.Link>
            <Nav.Link href="/tools">Tools</Nav.Link>
          </Nav>
          <Login/>
          <Logout/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;